import i18n from 'i18next';
import {initReactI18next}  from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Language" : "English",
                    "Search" : "Search",
                    "Login" : "Login",
                    "Search results" : "Search results",
                    "Search QuickShop" : "Search QuickShop",
                    "Categories" : "Categories",
                    "Sort by" : "Sort by",
                    "Items on page" : "Items on page",
                    "Quantity": "Quantity",
                    "Price" : "Price",
                    "Name" : "Name",
                    "Rating" : "Rating",
                    "Category" : "Category",
                    "Description" : "Description",
                    "All" : "All",
                    'Contact us' : 'Contact us',
                    'Your cart is empty': 'Your cart is empty',
                    'Address 1' : 'Address 1',
                    'Address 2 (optional)' : 'Address 2 (optional)',
                    'Email' : 'Email',
                    'Password' : 'Password',
                    'ZipCode' : 'ZipCode',
                    'Card Number' : 'Card Number',
                    'Expiry' : 'Expiry',
                    'CVC' : 'CVC',
                    'Order' : 'Order',
                    'Add to cart' : 'Add to cart',
                    'Edit' : 'Edit',
                    'Save' : 'Save',
                    'First Name' : 'First Name',
                    'Last Name' : 'Last Name',
                    'Unfortunately, no  products found' : 'Unfortunately, no  products found',
                    'Logout' : 'Logout',
                }
            },
            ru: {
                translation: {
                    "Language" : "Русский",
                    "Search": "Поиск",
                    "Login" : "Войти",
                    "Search results" : "Найдено товаров",
                    "Search QuickShop": "Искать в QuickShop",
                    "Categories" : "Категория",
                    "Sort by": "Сортировать по",
                    "Items on page" : "Всего на странице",
                    "Quantity" : "Количество",
                    "Price" : "Цена",
                    "Name" : "Название",
                    "Rating" : "Рейтинг",
                    "Category" : "Категория",
                    "Description" : "Описание",
                    "All" : "Все",
                    'Contact us' : 'Связаться с нами',
                    'Your cart is empty' : 'Корзина пуста',
                    'Address 1' : 'Адрес 1',
                    'Address 2 (optional)' : 'Адрес 2 (опционально)',
                    'Email': 'Email',
                    'Password' : 'Пароль',
                    'ZipCode' : 'Индекс',
                    'Card Number' : 'Номер карты',
                    'Expiry' : 'Срок действия',
                    'CVC' : 'CVC',
                    'Order' : 'Сделать заказ',
                    'Add to cart' : 'В корзину',
                    'Edit' : 'Редактировать',
                    'Save' : 'Сохранить',
                    'First Name' : 'Имя',
                    'Last Name' : 'Фамилия',
                    'Unfortunately, no  products found' : 'К сожалению, ничего не найдено',
                    'Logout' : 'Выйти',
                }
            }
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;