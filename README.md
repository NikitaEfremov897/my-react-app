**Frontend-разработка** 
**Модуль 3. Фреймворки для frontend.**  
**Jobly** — это учебный проект, реализованный на базе React, TypeScript и Vite.  
**Реализованный функционал**  
-Загрузка карточек с API  
-Динамическое отображение карточек с параметром limit  
-Маршрутизация через React Router 
-Модальные окна входа и регистрации  
-Прелоадер при запуске страницы  
-Полная типизация компонентов с TypeScript  
**Структура**
<pre><small>
.
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── Message.tsx
│   ├── assets
│   │   └── img
│   │       ├── Rectangle2.jpg
│   │       ├── ava.png
│   │       ├── image 4.png
│   │       ├── image 5.jpg
│   │       ├── image2.png
│   │       ├── image3.png
│   │       ├── info.png
│   │       └── kav.png
│   ├── components
│   │   ├── AuthModal
│   │   │   ├── AuthModal.module.css
│   │   │   ├── AuthModal.tsx
│   │   │   └── AuthModal.types.ts
│   │   ├── Card
│   │   │   ├── Card.module.css
│   │   │   └── Card.tsx
│   │   ├── CardList
│   │   │   ├── CardList.module.css
│   │   │   └── CardList.tsx
│   │   ├── ConnectSection
│   │   │   ├── ConnectSection.module.css
│   │   │   └── ConnectSection.tsx
│   │   ├── CtaSection
│   │   │   ├── CtaSection.module.css
│   │   │   └── CtaSection.tsx
│   │   ├── FeaturesSection
│   │   │   ├── FeaturesSection.module.css
│   │   │   └── FeaturesSection.tsx
│   │   ├── Footer
│   │   │   ├── Footer.module.css
│   │   │   └── Footer.tsx
│   │   ├── Header
│   │   │   ├── Header.module.css
│   │   │   └── Header.tsx
│   │   ├── HeroSection
│   │   │   ├── HeroSection.module.css
│   │   │   └── HeroSection.tsx
│   │   ├── ImageSlider
│   │   │   ├── ImageSlider.module.css
│   │   │   └── ImageSlider.tsx
│   │   ├── Preloader
│   │   │   ├── Preloader.module.css
│   │   │   └── Preloader.tsx
│   │   └── QuoteSection
│   │       ├── QuoteSection.module.css
│   │       └── QuoteSection.tsx
│   ├── layouts
│   │   └── MainLayout.tsx
│   ├── main.tsx
│   ├── pages
│   │   ├── CardsPage.tsx
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
</small></pre>
**Запуск**  
npm run dev  
**Сборка**  
npm run build  
**Предпросмотр**  
npm run preview
