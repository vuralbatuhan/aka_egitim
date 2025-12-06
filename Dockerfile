FROM node:20-alpine

WORKDIR /app

# Önce package.json ve prisma şemasını kopyala
COPY package*.json ./
COPY prisma ./prisma

# Bağımlılıkları kur (postinstall içinde prisma generate çalışsa bile artık schema var)
RUN npm install --legacy-peer-deps

# Tüm proje dosyalarını kopyala
COPY . .

# (İstersen ekstra güven olsun diye tekrar prisma generate çalıştır)
RUN npx prisma generate

# Next.js production build
RUN npm run build

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "start"]
