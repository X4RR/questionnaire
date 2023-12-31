const regions = {
  '5d08e36dad3a9a001701b95f': 'Алтайский край',
  '5d08e36dad3a9a001701b960': 'Амурская область',
  '5d08e36dad3a9a001701b95c': 'Архангельская область',
  '5d08e36dad3a9a001701b963': 'Астраханская область',
  '5d08e36dad3a9a001701b951': 'Белгородская область',
  '5d08e36dad3a9a001701b961': 'Брянская область',
  '5d08e36fad3a9a001701b9d4': 'Чеченская Республика',
  '5d08e36fad3a9a001701b9d2': 'Челябинская область',
  '5d08e36fad3a9a001701b9c5': 'Чукотский автономный округ',
  '5d08e36fad3a9a001701b9d5': 'Чувашская Республика',
  '5d08e36dad3a9a001701b964': 'Еврейская автономная область',
  '5d08e36fad3a9a001701b9d0': 'Хабаровский край',
  '5d08e36fad3a9a001701b9d1': 'Ханты-Мансийский автономный округ — Югра',
  '5d08e36dad3a9a001701b97c': 'Иркутская область',
  '5d08e36dad3a9a001701b96b': 'Ивановская область',
  '5d08e36dad3a9a001701b965': 'Кабардино-Балкарская Республика',
  '5d08e36dad3a9a001701b968': 'Калининградская область',
  '5d08e36dad3a9a001701b970': 'Калужская область',
  '5d08e36dad3a9a001701b978': 'Камчатский край',
  '5d08e36dad3a9a001701b972': 'Карачаево-Черкесская Республика',
  '5d08e36dad3a9a001701b96a': 'Кемеровская область',
  '5d08e36dad3a9a001701b96d': 'Кировская область',
  '5d08e36dad3a9a001701b976': 'Костромская область',
  '5d08e36dad3a9a001701b96e': 'Краснодарский край',
  '5d08e36dad3a9a001701b977': 'Красноярский край',
  '5dd464abb3d9ab0012402632': 'Республика Крым',
  '5d08e36dad3a9a001701b96c': 'Курганская область',
  '5d08e36dad3a9a001701b96f': 'Курская область',
  '5d08e36dad3a9a001701b97a': 'Ленинградская область',
  '5d08e36dad3a9a001701b979': 'Липецкая область',
  '5d08e36dad3a9a001701b97b': 'Магаданская область',
  '5d08e36dad3a9a001701b975': 'Московская область',
  '5d08e36dad3a9a001701b95b': 'Москва',
  '5d08e36dad3a9a001701b974': 'Мурманская область',
  '5d08e36ead3a9a001701b97f': 'Ненецкий автономный округ',
  '5d08e36dad3a9a001701b973': 'Нижегородская область',
  '5d08e36ead3a9a001701b981': 'Новгородская область',
  '5fb25cf85e7ea700188ddc8b': 'Новосибирская область',
  '5d08e36ead3a9a001701b980': 'Омская область',
  '5d08e36dad3a9a001701b97d': 'Оренбургская область',
  '5d08e36dad3a9a001701b97e': 'Орловская область',
  '5d08e36dad3a9a001701b958': 'Пензенская область',
  '5d08e36dad3a9a001701b94b': 'Пермский край',
  '5d08e36dad3a9a001701b952': 'Приморский край',
  '5d08e36dad3a9a001701b949': 'Псковская область',
  '5d08e36dad3a9a001701b94d': 'Республика Адыгея',
  '5d08e36dad3a9a001701b94a': 'Республика Алтай',
  '5d08e36dad3a9a001701b953': 'Республика Башкортостан',
  '5d08e36dad3a9a001701b946': 'Республика Бурятия',
  '5d08e36dad3a9a001701b947': 'Республика Дагестан',
  '5d08e36dad3a9a001701b94e': 'Республика Хакасия',
  '5d08e36dad3a9a001701b948': 'Республика Ингушетия',
  '5d08e36dad3a9a001701b95a': 'Республика Калмыкия',
  '5d08e36dad3a9a001701b955': 'Республика Карелия',
  '5d08e36dad3a9a001701b954': 'Республика Коми',
  '5d08e36dad3a9a001701b94f': 'Республика Марий Эл',
  '5d08e36dad3a9a001701b957': 'Республика Мордовия',
  '5d08e36dad3a9a001701b959': 'Республика Саха (Якутия)',
  '5d08e36dad3a9a001701b950': 'Республика Северная Осетия – Алания',
  '5d08e36dad3a9a001701b95d': 'Республика Татарстан',
  '5d08e36dad3a9a001701b956': 'Республика Тыва',
  '5d08e36fad3a9a001701b9c7': 'Ростовская область',
  '5d08e36fad3a9a001701b9bf': 'Рязанская область',
  '5d08e36fad3a9a001701b9c3': 'Сахалинская область',
  '5d08e36fad3a9a001701b9c8': 'Самарская область',
  '5d08e36dad3a9a001701b94c': 'Санкт-Петербург',
  '5d08e36fad3a9a001701b9c1': 'Саратовская область',
  '608bb152f83b4e0019348391': 'Севастополь',
  '5d08e36fad3a9a001701b9c6': 'Смоленская область',
  '5d08e36fad3a9a001701b9ca': 'Ставропольский край',
  '5d08e36fad3a9a001701b9c9': 'Свердловская область',
  '5d08e36fad3a9a001701b9cf': 'Тамбовская область',
  '5d08e36fad3a9a001701b9cb': 'Томская область',
  '5d08e36fad3a9a001701b9cc': 'Тульская область',
  '5d08e36fad3a9a001701b9c0': 'Тверская область',
  '5d08e36fad3a9a001701b9cd': 'Тюменская область',
  '5d08e36fad3a9a001701b9ce': 'Удмуртская Республика',
  '5d08e36fad3a9a001701b9d3': 'Ульяновская область',
  '5d08e36dad3a9a001701b966': 'Владимирская область',
  '5d08e36dad3a9a001701b962': 'Волгоградская область',
  '5d08e36dad3a9a001701b967': 'Вологодская область',
  '5d08e36dad3a9a001701b95e': 'Воронежская область',
  '5d08e36fad3a9a001701b9c2': 'Ямало-Ненецкий автономный округ',
  '5d08e36fad3a9a001701b9c4': 'Ярославская область',
  '5d08e36dad3a9a001701b969': 'Забайкальский край',
};
export default regions;
