README.md: Інструкція для учасників проекту

---

### 1. Загальна Інформація та Ролі

| Роль         | Відповідальність                                                                          |
| :----------- | :---------------------------------------------------------------------------------------- |
| Team Lead    | Технічна реалізація, якість коду, Code Review, власник репозиторію.                       |
| Scrum Master | Регулює термін виконання проекту, проводить Stand Up, слідкує за завданнями та термінами. |

---

### 2. Налаштування Проекту та Середовища

#### 2.1. Доступ до Репозиторію

1. **Прийняття Запрошення:** Перевірте свою електронну пошту, на неї було
   надіслано **запрошення до репозиторію** на GitHub. Прийміть його, щоб
   отримати доступ.
2. **Початок:**
   - git clone https://github.com/vitaliifedunyk/project-group3.git - Одноразове
     завантаження.
3. **Підготовка (Робота з гілкою main):**
   - git checkout main
   - git pull origin main - Оновити робочу гілку перед стартом.
   - git checkout -b feature/назва-завдання - Створити нову feature-гілку для
     роботи.
4. **Завершення роботи:**
   - git add .
   - git commit -m "feat: Опис внесених змін"
   - git push origin feature/назва-завдання - Завантажити зміни.
   - Створити Pull Request (PR) на GitHub з вашої гілки в гілку **'main'**.
5. **Очистка:**
   - git branch -d feature/назва-завдання - Видалити локальну гілку після
     успішного злиття.

---

### 3. Технічні Конвенції та Стандарти Коду

Дотримання цих правил обов'язкове.

#### 3.1. Структура CSS (Mobile First)

1.  **Mobile First:** Стилі, написані поза медіа-запитами (.css), є стандартом
    для мобільного телефону.
2.  **Адаптивність:** Використовуйте медіа-запити для планшетів (768px+) та
    десктопів (1400px+).
3.  **Порядок Стилів (Каскадність) 🆕:** У межах кожного CSS-файлу (наприклад,
    `about.css`, `header.css`) **порядок класів має відповідати порядку їх появи
    у відповідному HTML-файлі**. Це значно спрощує читання коду, підтримку та
    пошук потрібних стилів.

#### 3.2. Іменування та Семантика

1.  **Іменування Класів:** Використовуємо методологію **BEM**
    (Block-Element-Modifier), першим словом завжди буде назва секції
    (`about-title`, `assortment-list`).
2.  **Відступи Між Секціями 📢:** Відступи між секціями задаються **СТРОГО** за
    допомогою властивості **padding**. **Для коректної сумації відступів**
    (нижній `padding` попередньої секції + верхній `padding` наступної)
    встановлюйте **лише половину** бажаного загального відступу на властивості
    `padding-top` та `padding-bottom` кожної секції.
3.  **Логотип:** Додається **тегом `<img>`**.
4.  **Змінні:** На цьому етапі навчання **НЕ** використовуємо CSS-змінні (тобто,
    використовуємо звичайні значення).
5.  **Плавні Переходи (Transition) 🆕:** Для всіх інтерактивних елементів
    (наприклад, **кнопки**, **посилання**, **іконки**) необхідно застосувати
    однаковий плавний перехід для покращення досвіду користувача:

    ```css
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    ```

#### 3.3. Структура Верстки

Секція робиться одним розробником у трьох розмірах під адаптив.

#### 3.4. Структура Проекту (Папка `src`) 🆕

| Файл / Папка    | Призначення та Зміст                                                                                                                                                                      |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.html`    | **Головна сторінка.** Містить загальну структуру та імпорт усіх partials-частин верстки.                                                                                                  |
| `main.js`       | **Основний файл JavaScript.** Використовується для ініціалізації всіх скриптів та інтерактивної логіки проекту.                                                                           |
| **`css/`**      | **Всі файли стилів.** Кожен файл відповідає за стилізацію окремої секції (`header.css`, `about.css` тощо). `styles.css` може виступати як основний файл, де імпортуються всі інші стилі.  |
| **`partials/`** | **HTML-частини секцій.** Тут зберігається розмітка кожної окремої секції (`header.html`, `about.html`, `footer.html`), які збираються в єдиний `index.html` за допомогою бандлера (Vite). |
| **`img/`**      | **Зображення та графіка.** Картинки організовані по папках відповідно до секцій, в яких вони використовуються (наприклад, `img/about`, `img/support`).                                    |
| `img/icons.svg` | Файл із загальними SVG-іконками.                                                                                                                                                          |
| `img/logo.svg`  | Файл із логотипом проекту.                                                                                                                                                                |
| **`public/`**   | Папка для статичних файлів, які копіюються до фінальної збірки (наприклад, **`favicon.svg`** — іконка сайту).                                                                             |

---

### 4. Звітність та Здача Завдань

#### 4.1. Звіт про Pull Request'и

Кожен учасник у корені проекту 'project-group3' створює файл
'pull-requests-list.txt' для фіксації усіх своїх PR. **Формат запису:**
поcилання на pull-request

#### 4.2. Фінальна Перевірка

Перед створенням Pull Request кожен учасник зобов'язаний:

1.  Перевірити код та стилі на **валідність**.
2.  Переконатися, що верстка відображається коректно у мобільній, планшетній та
    десктопній версіях.

---

### 5. Інформація про Команду

| Ім'я та Прізвище / Нік | Роль у Проекті   |
| :--------------------- | :--------------- |
| **Vitalii Fedunyk**    | **Team Lead**    |
| **Alina Kozlyuk**      | **Scrum Master** |
| Andriy Proshak         | Developer        |
| Bronislav Lipinskyi    | Developer        |
| Kateryna Ohnieva       | Developer        |
| Sergio Shambir         | Developer        |
| Slava S                | Developer        |
| Stanislaw.             | Developer        |
| Vladislav Petrov       | Developer        |

---

### 5.1. Розподіл Секцій Проекту

| Учасник                 | Реалізовані Секції                                     |
| :---------------------- | :----------------------------------------------------- |
| **Vitalii Fedunyk**     | Керував проєктом і реалізував секцію "about"           |
| **Slava Sobchuk**       | Секції "header" та "burger-menu"                       |
| **Andriy Proshak**      | Секція "assortment"                                    |
| **Sergio Shambir**      | Секція "support"                                       |
| **Kateryna Ognieva**    | Секція "advantages"                                    |
| **Alina Kozlyuk**       | Відповідала за процеси, реалізувала секцію "feedbacks" |
| **Vladislav Petrov**    | Секція "hero"                                          |
| **Stanislaw Skilskyy**  | Секція "footer"                                        |
| **Bronislav Lipinskyi** | Секція "gallery"                                       |

---

### 6. Корисна Інформація

Макет проекту -
https://www.figma.com/design/RCf95cRtisUxC8gsNFAFAp/EcoTote?node-id=5999-10563&t=nWranbIbojsrBZff-1

Технічні вимоги до проєкту -
https://docs.google.com/spreadsheets/d/1cjTCqYsdTgFdQEhpCfu-b9m1uorSlAUOegU3T4HzVOQ/edit?gid=0#gid=0

Як здати ДЗ по проєкту в LMS - https://youtu.be/9Ts2LBsdQfU

Інструкція роботи з бандлером Vite - https://youtu.be/Ic-pOK4pqOk

Про роботу з репозиторієм через термінал -
https://youtu.be/wFY5HVuQBgw?si=V4sPSgb4cwhu-XKx

Презентація: Матеріали до командного проєкту з HTML+CSS (FullStack) -
https://docs.google.com/presentation/d/1_QpjBvS2UnU_OKJUgzx6eXqTZX
rOFRJ/edit?slide=id.p1#slide=id.p1

---

# README.md: Project Participants Guide (English)

---

### 1. General Information and Roles

| Role         | Responsibility                                                               |
| :----------- | :--------------------------------------------------------------------------- |
| Team Lead    | Technical implementation, code quality, Code Review, repository owner.       |
| Scrum Master | Regulates project timeline, conducts Stand Up, monitors tasks and deadlines. |

---

### 2. Project Setup and Environment

#### 2.1. Repository Access

1. **Accepting Invitation:** Check your email, you should have received an
   **invitation to the repository** on GitHub. Accept it to gain access.
2. **Getting Started:**
   - git clone https://github.com/vitaliifedunyk/project-group3.git - One-time
     download.
3. **Preparation (Working with main branch):**
   - git checkout main
   - git pull origin main - Update working branch before starting.
   - git checkout -b feature/task-name - Create a new feature branch for work.
4. **Finishing Work:**
   - git add .
   - git commit -m "feat: Description of changes made"
   - git push origin feature/task-name - Upload changes.
   - Create a Pull Request (PR) on GitHub from your branch to the **'main'**
     branch.
5. **Cleanup:**
   - git branch -d feature/task-name - Delete local branch after successful
     merge.

---

### 3. Technical Conventions and Code Standards

Compliance with these rules is mandatory.

#### 3.1. CSS Structure (Mobile First)

1.  **Mobile First:** Styles written outside media queries (.css) are the
    standard for mobile phones.
2.  **Responsiveness:** Use media queries for tablets (768px+) and desktops
    (1400px+).
3.  **Style Order (Cascading) 🆕:** Within each CSS file (e.g., `about.css`,
    `header.css`) **the order of classes must match the order of their
    appearance in the corresponding HTML file**. This significantly simplifies
    code reading, maintenance, and finding needed styles.

#### 3.2. Naming and Semantics

1.  **Class Naming:** We use the **BEM** methodology (Block-Element-Modifier),
    the first word should always be the section name (`about-title`,
    `assortment-list`).
2.  **Spacing Between Sections 📢:** Spacing between sections is set
    **STRICTLY** using the **padding** property. **For correct spacing
    summation** (bottom `padding` of previous section + top `padding` of next),
    set **only half** of the desired total spacing on the `padding-top` and
    `padding-bottom` properties of each section.
3.  **Logo:** Added using **`<img>` tag**.
4.  **Variables:** At this learning stage, we **DO NOT** use CSS variables
    (i.e., we use regular values).
5.  **Smooth Transitions (Transition) 🆕:** For all interactive elements (e.g.,
    **buttons**, **links**, **icons**), it is necessary to apply the same smooth
    transition to improve user experience:

    ```css
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    ```

#### 3.3. Layout Structure

A section is done by one developer in three sizes for responsive design.

#### 3.4. Project Structure (Folder `src`) 🆕

| File / Folder   | Purpose and Content                                                                                                                                                                             |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.html`    | **Main page.** Contains the general structure and import of all partial layout parts.                                                                                                           |
| `main.js`       | **Main JavaScript file.** Used for initializing all scripts and interactive logic of the project.                                                                                               |
| **`css/`**      | **All style files.** Each file is responsible for styling a separate section (`header.css`, `about.css`, etc.). `styles.css` can serve as the main file where all other styles are imported.    |
| **`partials/`** | **HTML section parts.** Here the markup of each separate section (`header.html`, `about.html`, `footer.html`) is stored, which are assembled into a single `index.html` using a bundler (Vite). |
| **`img/`**      | **Images and graphics.** Pictures are organized in folders according to the sections in which they are used (e.g., `img/about`, `img/support`).                                                 |
| `img/icons.svg` | File with common SVG icons.                                                                                                                                                                     |
| `img/logo.svg`  | File with the project logo.                                                                                                                                                                     |
| **`public/`**   | Folder for static files that are copied to the final build (e.g., **`favicon.svg`** — site icon).                                                                                               |

---

### 4. Reporting and Task Submission

#### 4.1. Pull Request Report

Each participant in the root of the 'project-group3' project creates a file
'pull-requests-list.txt' to record all their PRs. **Record format:** link to
pull-request

#### 4.2. Final Check

Before creating a Pull Request, each participant must:

1.  Check code and styles for **validity**.
2.  Make sure the layout displays correctly in mobile, tablet, and desktop
    versions.

---

### 5. Team Information

| Name / Nickname     | Role in Project  |
| :------------------ | :--------------- |
| **Vitalii Fedunyk** | **Team Lead**    |
| **Alina Kozlyuk**   | **Scrum Master** |
| Andriy Proshak      | Developer        |
| Bronislav Lipinskyi | Developer        |
| Kateryna Ohnieva    | Developer        |
| Sergio Shambir      | Developer        |
| Slava S             | Developer        |
| Stanislaw.          | Developer        |
| Vladislav Petrov    | Developer        |

---

### 5.1. Project Sections Distribution

| Participant             | Implemented Sections                                           |
| :---------------------- | :------------------------------------------------------------- |
| **Vitalii Fedunyk**     | Managed the project and implemented the "about" section        |
| **Slava Sobchuk**       | "header" and "burger-menu" sections                            |
| **Andriy Proshak**      | "assortment" section                                           |
| **Sergio Shambir**      | "support" section                                              |
| **Kateryna Ognieva**    | "advantages" section                                           |
| **Alina Kozlyuk**       | Responsible for processes, implemented the "feedbacks" section |
| **Vladislav Petrov**    | "hero" section                                                 |
| **Stanislaw Skilskyy**  | "footer" section                                               |
| **Bronislav Lipinskyi** | "gallery" section                                              |

---

### 6. Useful Information

Project mockup -
https://www.figma.com/design/RCf95cRtisUxC8gsNFAFAp/EcoTote?node-id=5999-10563&t=nWranbIbojsrBZff-1

Technical requirements for the project -
https://docs.google.com/spreadsheets/d/1cjTCqYsdTgFdQEhpCfu-b9m1uorSlAUOegU3T4HzVOQ/edit?gid=0#gid=0

How to submit homework for the project in LMS - https://youtu.be/9Ts2LBsdQfU

Vite bundler working instructions - https://youtu.be/Ic-pOK4pqOk

About working with the repository through terminal -
https://youtu.be/wFY5HVuQBgw?si=V4sPSgb4cwhu-XKx

Presentation: Materials for the team project on HTML+CSS (FullStack) -
https://docs.google.com/presentation/d/1_QpjBvS2UnU_OKJUgzx6eXqTZX
rOFRJ/edit?slide=id.p1#slide=id.p1
