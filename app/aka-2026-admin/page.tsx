"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import AdminToast, { type ToastState } from "@/components/admin/AdminToast";

interface InstagramPost {
  id: string;
  image_url: string;
  alt_text: string | null;
  link: string | null;
  order_index: number;
  is_active: boolean;
  created_at: string;
}

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  city: string | null;
  program_type: string | null;
  program: string | null;
  message: string | null;
  is_read: boolean;
  created_at: string;
}

interface ProgramImageRow {
  id: string;
  program_id: string;
  image_url: string;
  caption: string | null;
  order_index: number;
}

interface ProgramRow {
  id: string;
  title: string;
  subtitle: string | null;
  school_name: string | null;
  duration_text: string | null;
  dates_text: string | null;
  highlights: string[];
  included_items: string[];
  extra_advantages: string[];
  contact_name: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  order_index: number;
  is_active: boolean;
  created_at: string;
}

export default function AdminPanel() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"instagram" | "contacts" | "programs">("instagram");
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [editingPost, setEditingPost] = useState<InstagramPost | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    image_url: "",
    alt_text: "",
    link: "",
    order_index: 0,
    is_active: true,
  });

  // Programlar state
  const [programs, setPrograms] = useState<ProgramRow[]>([]);
  const [programImages, setProgramImages] = useState<ProgramImageRow[]>([]);
  const [showProgramModal, setShowProgramModal] = useState(false);
  const [editingProgram, setEditingProgram] = useState<ProgramRow | null>(null);
  const [programUploading, setProgramUploading] = useState(false);
  const [programImageFiles, setProgramImageFiles] = useState<{ file: File | null; caption: string }[]>([]);
  const [existingProgramImages, setExistingProgramImages] = useState<ProgramImageRow[]>([]);
  const [programImagesToRemove, setProgramImagesToRemove] = useState<string[]>([]);
  const [toast, setToast] = useState<ToastState>({ message: "", type: "info", show: false });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showToast = useCallback((message: string, type: ToastState["type"] = "info") => {
    setToast({ message, type, show: true });
  }, []);
  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, show: false }));
  }, []);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!checkingAuth) {
      if (activeTab === "instagram") {
        fetchInstagramPosts();
      } else if (activeTab === "contacts") {
        fetchContactSubmissions();
      } else if (activeTab === "programs") {
        fetchPrograms();
      }
    }
  }, [activeTab, checkingAuth]);

  const checkAuth = async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) throw error;
      
      if (!session) {
        router.push("/aka-2026-admin/login");
        return;
      }
      
      setCheckingAuth(false);
    } catch (error) {
      console.error("Auth check error:", error);
      router.push("/aka-2026-admin/login");
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      router.push("/aka-2026-admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const fetchInstagramPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("instagram_posts")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) throw error;
      setInstagramPosts(data || []);
    } catch (error) {
      console.error("Error fetching Instagram posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchContactSubmissions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }
      setContactSubmissions(data || []);
    } catch (error: any) {
      console.error("Error fetching contact submissions:", error);
      showToast(error?.message || "İletişim formları yüklenirken hata oluştu.", "error");
      setContactSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("programs")
        .select("*")
        .order("order_index", { ascending: true });
      if (error) throw error;
      setPrograms(data || []);
    } catch (error: any) {
      console.error("Error fetching programs:", error);
      setPrograms([]);
    } finally {
      setLoading(false);
    }
  };

  const uploadProgramImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random().toString(36).slice(2)}.${fileExt}`;
    const filePath = `programs/${fileName}`;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(filePath, file, { cacheControl: "3600", upsert: false });
    if (error) throw error;
    const { data: { publicUrl } } = supabase.storage.from("images").getPublicUrl(filePath);
    return publicUrl;
  };

  const resetProgramForm = () => {
    setProgramImageFiles([]);
    setExistingProgramImages([]);
    setProgramImagesToRemove([]);
    setEditingProgram(null);
  };

  const openEditProgramModal = async (program: ProgramRow) => {
    setEditingProgram(program);
    setProgramImageFiles([]);
    setProgramImagesToRemove([]);
    await fetchProgramImages(program.id);
    setShowProgramModal(true);
  };

  const fetchProgramImages = async (programId: string): Promise<ProgramImageRow[]> => {
    const { data, error } = await supabase
      .from("program_images")
      .select("*")
      .eq("program_id", programId)
      .order("order_index", { ascending: true });
    const list = !error && data ? data : [];
    setExistingProgramImages(list);
    return list;
  };

  const handleAddProgram = async () => {
    const validImages = programImageFiles.filter((item) => item.file && item.file.size > 0) as { file: File; caption: string }[];
    if (validImages.length === 0) {
      showToast("En az bir görsel ekleyin.", "error");
      return;
    }
    try {
      setProgramUploading(true);
      const { data: newProgram, error: programError } = await supabase
        .from("programs")
        .insert([{ title: "Program", order_index: 0, is_active: true }])
        .select("id")
        .single();
      if (programError) throw programError;
      const programId = newProgram.id;
      for (let i = 0; i < validImages.length; i++) {
        const { file, caption } = validImages[i];
        const imageUrl = await uploadProgramImage(file);
        await supabase.from("program_images").insert([
          { program_id: programId, image_url: imageUrl, caption: caption.trim() || null, order_index: i },
        ]);
      }
      setShowProgramModal(false);
      resetProgramForm();
      fetchPrograms();
      showToast("Görsel(ler) eklendi.", "success");
    } catch (error: any) {
      console.error("Görsel eklenirken hata:", error);
      showToast(error?.message || "Görsel eklenirken bir hata oluştu.", "error");
    } finally {
      setProgramUploading(false);
    }
  };

  const handleUpdateProgram = async () => {
    if (!editingProgram) return;
    try {
      setProgramUploading(true);
      for (const id of programImagesToRemove) {
        await supabase.from("program_images").delete().eq("id", id);
      }
      const kept = existingProgramImages.filter((img) => !programImagesToRemove.includes(img.id));
      const validNewImages = programImageFiles.filter((item) => item.file && item.file.size > 0) as { file: File; caption: string }[];
      for (let i = 0; i < validNewImages.length; i++) {
        const { file, caption } = validNewImages[i];
        const imageUrl = await uploadProgramImage(file);
        await supabase.from("program_images").insert([
          { program_id: editingProgram.id, image_url: imageUrl, caption: caption.trim() || null, order_index: kept.length + i },
        ]);
      }
      setShowProgramModal(false);
      resetProgramForm();
      fetchPrograms();
      showToast("Görsel(ler) güncellendi.", "success");
    } catch (error: any) {
      console.error("Görsel güncellenirken hata:", error);
      showToast(error?.message || "Görsel güncellenirken bir hata oluştu.", "error");
    } finally {
      setProgramUploading(false);
    }
  };

  const handleDeleteProgram = async (id: string) => {
    if (!confirm("Bu programı silmek istediğinize emin misiniz? Tüm görseller de silinecektir.")) return;
    try {
      await supabase.from("program_images").delete().eq("program_id", id);
      const { error } = await supabase.from("programs").delete().eq("id", id);
      if (error) throw error;
      fetchPrograms();
    } catch (error: any) {
      showToast(error?.message || "Program silinirken hata.", "error");
    }
  };

  const handleAddPost = async () => {
    try {
      setUploading(true);
      let imageUrl = formData.image_url;

      // If file is selected, upload it
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      if (!imageUrl) {
        showToast("Lütfen bir görsel URL'i girin veya dosya yükleyin.", "error");
        setUploading(false);
        return;
      }

      const { error } = await supabase.from("instagram_posts").insert([{
        ...formData,
        image_url: imageUrl
      }]);
      if (error) throw error;
      setShowAddModal(false);
      resetForm();
      fetchInstagramPosts();
      showToast("Gönderi eklendi.", "success");
    } catch (error: any) {
      console.error("Error adding post:", error);
      const errorMessage = error?.message || "Gönderi eklenirken bir hata oluştu.";
      showToast(errorMessage, "error");
    } finally {
      setUploading(false);
    }
  };

  const handleUpdatePost = async () => {
    if (!editingPost) return;
    try {
      setUploading(true);
      let imageUrl = formData.image_url;

      // If file is selected, upload it
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      if (!imageUrl) {
        showToast("Lütfen bir görsel URL'i girin veya dosya yükleyin.", "error");
        setUploading(false);
        return;
      }

      const { error } = await supabase
        .from("instagram_posts")
        .update({
          ...formData,
          image_url: imageUrl
        })
        .eq("id", editingPost.id);
      if (error) throw error;
      setEditingPost(null);
      resetForm();
      setShowAddModal(false);
      fetchInstagramPosts();
      showToast("Gönderi güncellendi.", "success");
    } catch (error: any) {
      console.error("Error updating post:", error);
      const errorMessage = error?.message || "Gönderi güncellenirken bir hata oluştu.";
      showToast(errorMessage, "error");
    } finally {
      setUploading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Bu gönderiyi silmek istediğinize emin misiniz?")) return;
    try {
      const { error } = await supabase.from("instagram_posts").delete().eq("id", id);
      if (error) throw error;
      fetchInstagramPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
      showToast("Gönderi silinirken bir hata oluştu.", "error");
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .update({ is_read: true })
        .eq("id", id);
      if (error) throw error;
      fetchContactSubmissions();
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  };

  const handleDeleteSubmission = async (id: string) => {
    if (!confirm("Bu form gönderisini silmek istediğinize emin misiniz? Bu işlem geri alınamaz.")) return;
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .delete()
        .eq("id", id);
      
      if (error) {
        console.error("Supabase delete error:", error);
        throw error;
      }
      
      // Optimistically update the list
      setContactSubmissions(prev => prev.filter(sub => sub.id !== id));
      
      // Refresh to ensure consistency
      await fetchContactSubmissions();
    } catch (error: any) {
      console.error("Error deleting submission:", error);
      const errorMessage = error?.message || "Form gönderisi silinirken bir hata oluştu.";
      showToast(errorMessage, "error");
    }
  };

  const resetForm = () => {
    setFormData({
      image_url: "",
      alt_text: "",
      link: "",
      order_index: 0,
      is_active: true,
    });
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
        if (!file.type.startsWith('image/')) {
          showToast('Lütfen bir görsel dosyası seçin.', "error");
          return;
        }
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        showToast('Dosya boyutu 5MB\'dan küçük olmalıdır.', "error");
        return;
      }
      setSelectedFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `instagram-posts/${fileName}`;

      const { data, error } = await supabase.storage
        .from('images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        if (error.message.includes('Bucket not found') || error.message.includes('not found')) {
          throw new Error('Storage bucket bulunamadı! Lütfen Supabase Dashboard\'dan "images" adında bir public bucket oluşturun. Detaylar için storage-setup.md dosyasına bakın.');
        }
        throw error;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error: any) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const openEditModal = (post: InstagramPost) => {
    setEditingPost(post);
    setFormData({
      image_url: post.image_url,
      alt_text: post.alt_text || "",
      link: post.link || "",
      order_index: post.order_index,
      is_active: post.is_active,
    });
    setSelectedFile(null);
    setPreviewUrl(post.image_url);
    setShowAddModal(true);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent mb-4"></div>
          <p className="text-gray-600 font-medium">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  const unreadCount = contactSubmissions.filter((c) => !c.is_read).length;

  const navItems = [
    { id: "instagram" as const, label: "Instagram Gönderileri", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", color: "#F07D2C" },
    { id: "contacts" as const, label: "İletişim Formları", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "#3699BF" },
    { id: "programs" as const, label: "Programlar", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7V7a2 2 0 012-2m0 0V5a2 2 0 012 2m0 6v6a2 2 0 01-2 2h-2m-4 0h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2z", color: "#641a29" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar - hidden on mobile unless open */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-aka-maroon shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-aka-maroon">Admin Paneli</h1>
              <p className="text-xs text-gray-500">Yönetim Merkezi</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-colors ${
                activeTab === item.id ? "text-white shadow-md" : "text-gray-600 hover:bg-gray-50"
              }`}
              style={activeTab === item.id ? { backgroundColor: item.color } : {}}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="truncate">{item.label}</span>
              {item.id === "contacts" && unreadCount > 0 && (
                <span className="ml-auto min-w-[22px] h-[22px] rounded-full bg-aka-orange text-white text-xs font-bold flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 rounded-xl hover:bg-red-50 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Çıkış Yap
          </button>
        </div>
      </aside>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top bar - mobile menu + title */}
        <div className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="Menüyü aç"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h2 className="text-xl font-semibold text-gray-800 truncate">
            {activeTab === "instagram" && "Instagram Gönderileri"}
            {activeTab === "contacts" && "İletişim Formları"}
            {activeTab === "programs" && "Programlar"}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto w-full"
        >
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#F07D2C" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Toplam Gönderi</p>
                <p className="text-3xl font-bold mt-2" style={{ color: "#60091b" }}>{instagramPosts.length}</p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F07D2C20" }}>
                <svg className="w-6 h-6" style={{ color: "#F07D2C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#3699BF" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Toplam Form</p>
                <p className="text-3xl font-bold mt-2" style={{ color: "#60091b" }}>{contactSubmissions.length}</p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3699BF20" }}>
                <svg className="w-6 h-6" style={{ color: "#3699BF" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: "#F07D2C" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Okunmamış</p>
                <p className="text-3xl font-bold mt-2" style={{ color: "#60091b" }}>{unreadCount}</p>
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F07D2C20" }}>
                <svg className="w-6 h-6" style={{ color: "#F07D2C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Posts Tab */}
        {activeTab === "instagram" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Instagram Gönderileri</h2>
              <button
                onClick={() => {
                  resetForm();
                  setEditingPost(null);
                  setShowAddModal(true);
                }}
                className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                style={{ backgroundColor: "#F07D2C" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Yeni Gönderi Ekle
              </button>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent mb-4"></div>
                  <p className="text-gray-600">Yükleniyor...</p>
                </div>
              </div>
            ) : instagramPosts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 text-lg">Henüz gönderi bulunmamaktadır</p>
                <button
                  onClick={() => {
                    resetForm();
                    setEditingPost(null);
                    setShowAddModal(true);
                  }}
                  className="mt-4 px-6 py-2 text-white rounded-lg transition-all"
                  style={{ backgroundColor: "#F07D2C" }}
                >
                  İlk Gönderiyi Ekle
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instagramPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <div className="relative h-64 group">
                      <img
                        src={post.image_url}
                        alt={post.alt_text || "Instagram post"}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {!post.is_active && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Pasif
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Sıra: {post.order_index}
                      </div>
                    </div>
                    <div className="p-5">
                      {post.alt_text && (
                        <p className="text-sm text-gray-700 mb-3 font-medium line-clamp-2">{post.alt_text}</p>
                      )}
                      {post.link && (
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 text-sm hover:underline flex items-center gap-1 mb-4"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Linki Görüntüle
                        </a>
                      )}
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEditModal(post)}
                          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 text-sm font-medium flex items-center justify-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Düzenle
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105 text-sm font-medium flex items-center justify-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Contact Submissions Tab */}
        {activeTab === "contacts" && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">İletişim Formu Gönderileri</h2>
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
                  <p className="text-gray-600">Yükleniyor...</p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr style={{ backgroundColor: "#F9FAFB" }}>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Tarih
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Ad Soyad
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Telefon
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Şehir
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Program
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Durum
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          İşlemler
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {contactSubmissions.map((submission) => (
                        <tr
                          key={submission.id}
                          className={`transition-colors duration-150 ${!submission.is_read ? "bg-yellow-50 hover:bg-yellow-100" : "hover:bg-gray-50"}`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(submission.created_at).toLocaleDateString("tr-TR")}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {submission.first_name} {submission.last_name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {submission.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {submission.city || "-"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {submission.program_type && submission.program
                              ? `${submission.program_type} - ${submission.program}`
                              : submission.program_type || submission.program || "-"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {submission.is_read ? (
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                Okundu
                              </span>
                            ) : (
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Yeni
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex gap-2 flex-wrap">
                              {!submission.is_read && (
                                <button
                                  onClick={() => handleMarkAsRead(submission.id)}
                                  className="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 text-xs font-medium flex items-center gap-1"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Okundu
                                </button>
                              )}
                              {submission.message && (
                                <button
                                  onClick={() => {
                                    setSelectedSubmission(submission);
                                    setShowMessageModal(true);
                                  }}
                                  className="px-3 py-1.5 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 text-xs font-medium flex items-center gap-1"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  Mesaj
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteSubmission(submission.id)}
                                className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105 text-xs font-medium flex items-center gap-1"
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {contactSubmissions.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Henüz form gönderisi bulunmamaktadır.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Programlar Tab */}
        {activeTab === "programs" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Programlar</h2>
              <button
                onClick={() => {
                  resetProgramForm();
                  setEditingProgram(null);
                  setProgramImageFiles([{ file: null, caption: "" }]);
                  setShowProgramModal(true);
                }}
                className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                style={{ backgroundColor: "#641a29" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Yeni Program Ekle
              </button>
            </div>
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#641a29] border-t-transparent mb-4"></div>
                  <p className="text-gray-600">Yükleniyor...</p>
                </div>
              </div>
            ) : programs.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7V7a2 2 0 012-2m0 0V5a2 2 0 012 2m0 6v6a2 2 0 01-2 2h-2m-4 0h-2a2 2 0 01-2-2v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-600 text-lg">Henüz program bulunmamaktadır</p>
                <button
                  onClick={() => {
                    resetProgramForm();
                    setEditingProgram(null);
                    setProgramImageFiles([{ file: null, caption: "" }]);
                    setShowProgramModal(true);
                  }}
                  className="mt-4 px-6 py-2 text-white rounded-lg transition-all"
                  style={{ backgroundColor: "#641a29" }}
                >
                  İlk Programı Ekle
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {programs.map((program) => (
                  <div
                    key={program.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-xl"
                  >
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{program.title}</h3>
                      {program.subtitle && <p className="text-sm text-gray-600 mb-2">{program.subtitle}</p>}
                      {program.school_name && <p className="text-sm text-gray-500 mb-3">{program.school_name}</p>}
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => openEditProgramModal(program)}
                          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-sm font-medium flex items-center justify-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Düzenle
                        </button>
                        <button
                          onClick={() => handleDeleteProgram(program.id)}
                          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-sm font-medium flex items-center justify-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Add/Edit Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold" style={{ color: "#60091b" }}>
                  {editingPost ? "Gönderi Düzenle" : "Yeni Gönderi Ekle"}
                </h3>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingPost(null);
                    resetForm();
                    setSelectedFile(null);
                    setPreviewUrl(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Görsel Yükle
                  </label>
                  <label
                    htmlFor="file-upload"
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-orange-500 transition-colors cursor-pointer"
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const file = e.dataTransfer.files?.[0];
                      if (file) {
                        if (!file.type.startsWith('image/')) {
                          showToast('Lütfen bir görsel dosyası seçin.', "error");
                          return;
                        }
                        if (file.size > 5 * 1024 * 1024) {
                          showToast('Dosya boyutu 5MB\'dan küçük olmalıdır.', "error");
                          return;
                        }
                        setSelectedFile(file);
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setPreviewUrl(reader.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  >
                    <div className="space-y-1 text-center w-full">
                      {previewUrl ? (
                        <div className="relative inline-block">
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="mx-auto h-32 w-auto rounded-lg object-cover"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedFile(null);
                              setPreviewUrl(null);
                              setFormData({ ...formData, image_url: "" });
                            }}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <>
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600 justify-center">
                            <span className="font-medium text-orange-600 hover:text-orange-500">
                              Dosya seç
                            </span>
                            <span className="pl-1">veya sürükle bırak</span>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF (Max. 5MB)</p>
                        </>
                      )}
                    </div>
                  </label>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                </div>

                {/* Or Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">veya</span>
                  </div>
                </div>

                {/* URL Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Görsel URL (Alternatif)
                  </label>
                  <input
                    type="text"
                    value={formData.image_url}
                    onChange={(e) => {
                      setFormData({ ...formData, image_url: e.target.value });
                      if (!selectedFile) {
                        setPreviewUrl(e.target.value || null);
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    placeholder="https://..."
                    disabled={!!selectedFile}
                  />
                  {selectedFile && (
                    <p className="mt-1 text-xs text-gray-500">Dosya seçildi, URL devre dışı</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alt Metin
                  </label>
                  <input
                    type="text"
                    value={formData.alt_text}
                    onChange={(e) =>
                      setFormData({ ...formData, alt_text: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    placeholder="Görsel açıklaması"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Link (Opsiyonel)
                  </label>
                  <input
                    type="text"
                    value={formData.link}
                    onChange={(e) =>
                      setFormData({ ...formData, link: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sıra
                  </label>
                  <input
                    type="number"
                    value={formData.order_index}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        order_index: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={(e) =>
                      setFormData({ ...formData, is_active: e.target.checked })
                    }
                    className="mr-2"
                  />
                  <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
                    Aktif
                  </label>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button
                  onClick={
                    editingPost ? handleUpdatePost : handleAddPost
                  }
                  disabled={uploading}
                  className="flex-1 px-6 py-3 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#F07D2C" }}
                >
                  {uploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Yükleniyor...
                    </>
                  ) : editingPost ? (
                    "Güncelle"
                  ) : (
                    "Ekle"
                  )}
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingPost(null);
                    resetForm();
                    setSelectedFile(null);
                    setPreviewUrl(null);
                  }}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Message Detail Modal */}
        {showMessageModal && selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto transform transition-all">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold" style={{ color: "#60091b" }}>Mesaj Detayları</h3>
                <button
                  onClick={() => {
                    setShowMessageModal(false);
                    setSelectedSubmission(null);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      Ad Soyad
                    </label>
                    <p className="text-gray-900 font-medium">
                      {selectedSubmission.first_name} {selectedSubmission.last_name}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      Telefon
                    </label>
                    <p className="text-gray-900 font-medium">{selectedSubmission.phone}</p>
                  </div>
                </div>
                {selectedSubmission.city && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      Şehir
                    </label>
                    <p className="text-gray-900 font-medium">{selectedSubmission.city}</p>
                  </div>
                )}
                {(selectedSubmission.program_type || selectedSubmission.program) && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      Program
                    </label>
                    <p className="text-gray-900 font-medium">
                      {selectedSubmission.program_type && selectedSubmission.program
                        ? `${selectedSubmission.program_type} - ${selectedSubmission.program}`
                        : selectedSubmission.program_type || selectedSubmission.program}
                    </p>
                  </div>
                )}
                {selectedSubmission.message && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      Mesaj
                    </label>
                    <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">
                      {selectedSubmission.message}
                    </p>
                  </div>
                )}
                <div className="bg-gray-50 rounded-lg p-4">
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    Tarih
                  </label>
                  <p className="text-gray-900 font-medium">
                    {new Date(selectedSubmission.created_at).toLocaleString("tr-TR")}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                {!selectedSubmission.is_read && (
                  <button
                    onClick={() => {
                      handleMarkAsRead(selectedSubmission.id);
                      setShowMessageModal(false);
                    }}
                    className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg font-medium flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Okundu İşaretle
                  </button>
                )}
                <button
                  onClick={() => {
                    if (confirm("Bu form gönderisini silmek istediğinize emin misiniz? Bu işlem geri alınamaz.")) {
                      handleDeleteSubmission(selectedSubmission.id);
                      setShowMessageModal(false);
                      setSelectedSubmission(null);
                    }
                  }}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg font-medium flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Sil
                </button>
                <button
                  onClick={() => {
                    setShowMessageModal(false);
                    setSelectedSubmission(null);
                  }}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Program Add/Edit Modal - sadece görsel yükleme */}
        {showProgramModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full my-8 mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold" style={{ color: "#641a29" }}>
                  {editingProgram ? "Görsel Ekle / Kaldır" : "Görsel Ekle"}
                </h3>
                <button
                  onClick={() => {
                    setShowProgramModal(false);
                    resetProgramForm();
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                {editingProgram && existingProgramImages.filter((img) => !programImagesToRemove.includes(img.id)).length > 0 && (
                  <div className="mb-3 space-y-2">
                    <p className="text-sm font-medium text-gray-600">Mevcut görseller</p>
                    {existingProgramImages
                      .filter((img) => !programImagesToRemove.includes(img.id))
                      .map((img) => (
                        <div key={img.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                          <img src={img.image_url} alt={img.caption || ""} className="w-16 h-16 object-cover rounded" />
                          <span className="flex-1 text-sm text-gray-700 truncate">{img.caption || "—"}</span>
                          <button
                            type="button"
                            onClick={() => setProgramImagesToRemove((prev) => [...prev, img.id])}
                            className="text-red-500 hover:text-red-700 text-sm shrink-0"
                          >
                            Kaldır
                          </button>
                        </div>
                      ))}
                  </div>
                )}
                {programImageFiles.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) {
                          setProgramImageFiles((prev) => {
                            const next = [...prev];
                            next[idx] = { ...next[idx], file: f };
                            return next;
                          });
                        }
                        e.target.value = "";
                      }}
                      className="flex-1 text-sm min-w-0"
                    />
                    {item.file && (
                      <span className="text-xs text-gray-500 shrink-0 truncate max-w-[80px]" title={item.file.name}>
                        {item.file.name}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => setProgramImageFiles((prev) => prev.filter((_, i) => i !== idx))}
                      className="text-red-500 hover:text-red-700 text-sm shrink-0"
                    >
                      Sil
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setProgramImageFiles((prev) => [...prev, { file: null, caption: "" }])}
                  className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-600 hover:border-[#641a29] hover:text-[#641a29]"
                >
                  + Görsel Ekle
                </button>
              </div>
              <div className="flex gap-3 mt-8">
                <button
                  onClick={editingProgram ? handleUpdateProgram : handleAddProgram}
                  disabled={programUploading || (!editingProgram && programImageFiles.every((x) => !x.file || x.file.size === 0))}
                  className="flex-1 px-6 py-3 text-white rounded-lg transition-all duration-200 font-medium disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#641a29" }}
                >
                  {programUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Yükleniyor...
                    </>
                  ) : editingProgram ? (
                    "Kaydet"
                  ) : (
                    "Ekle"
                  )}
                </button>
                <button
                  onClick={() => {
                    setShowProgramModal(false);
                    resetProgramForm();
                  }}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 font-medium"
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        )}
        </motion.div>
      </main>
      <AdminToast toast={toast} onClose={hideToast} />
    </div>
  );
}
