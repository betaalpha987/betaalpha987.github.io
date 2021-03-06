
var pre_countries = [
    {countryCode : 'AF', nameEnglish : 'Afghanistan', nameNative : 'غانستان'},
    {countryCode : 'AL', nameEnglish : 'Albania', nameNative : 'Shqipëri'},
    {countryCode : 'DZ', nameEnglish : 'Algeria', nameNative : 'الجزائر'},
    {countryCode : 'AS', nameEnglish : 'American Samoa', nameNative : ''},
    {countryCode : 'AD', nameEnglish : 'Andorra', nameNative : ''},
    {countryCode : 'AO', nameEnglish : 'Angola', nameNative : ''},
    {countryCode : 'AI', nameEnglish : 'Anguilla', nameNative : ''},
    {countryCode : 'AQ', nameEnglish : 'Antarctica', nameNative : ''},
    {countryCode : 'AG', nameEnglish : 'Antigua and Barbuda', nameNative : ''},
    {countryCode : 'AR', nameEnglish : 'Argentina', nameNative : ''},
    {countryCode : 'AM', nameEnglish : 'Armenia', nameNative : 'Հայաստան'},
    {countryCode : 'AW', nameEnglish : 'Aruba', nameNative : ''},
    {countryCode : 'AC', nameEnglish : 'Ascension Island', nameNative : ''},
    {countryCode : 'AU', nameEnglish : 'Australia', nameNative : ''},
    {countryCode : 'AT', nameEnglish : 'Austria', nameNative : 'Österreich'},
    {countryCode : 'AZ', nameEnglish : 'Azerbaijan', nameNative : 'Azərbaycan'},
    {countryCode : 'BS', nameEnglish : 'Bahamas', nameNative : ''},
    {countryCode : 'BH', nameEnglish : 'Bahrain', nameNative : 'البحرين'},
    {countryCode : 'BD', nameEnglish : 'Bangladesh', nameNative : 'বাংলাদেশ'},
    {countryCode : 'BB', nameEnglish : 'Barbados', nameNative : ''},
    {countryCode : 'BY', nameEnglish : 'Belarus', nameNative : 'Беларусь'},
    {countryCode : 'BE', nameEnglish : 'Belgium', nameNative : 'België'},
    {countryCode : 'BZ', nameEnglish : 'Belize', nameNative : ''},
    {countryCode : 'BJ', nameEnglish : 'Benin', nameNative : 'Bénin'},
    {countryCode : 'BM', nameEnglish : 'Bermuda', nameNative : ''},
    {countryCode : 'BT', nameEnglish : 'Bhutan', nameNative : 'འབྲུག'},
    {countryCode : 'BO', nameEnglish : 'Bolivia', nameNative : ''},
    {countryCode : 'BA', nameEnglish : 'Bosnia and Herzegovina', nameNative : 'Босна и Херцеговина'},
    {countryCode : 'BW', nameEnglish : 'Botswana', nameNative : ''},
    {countryCode : 'BV', nameEnglish : 'Bouvet Island', nameNative : ''},
    {countryCode : 'BR', nameEnglish : 'Brazil', nameNative : 'Brasil'},
    {countryCode : 'IO', nameEnglish : 'British Indian Ocean Territory', nameNative : ''},
    {countryCode : 'VG', nameEnglish : 'British Virgin Islands', nameNative : ''},
    {countryCode : 'BN', nameEnglish : 'Brunei', nameNative : ''},
    {countryCode : 'BG', nameEnglish : 'Bulgaria', nameNative : 'България'},
    {countryCode : 'BF', nameEnglish : 'Burkina Faso', nameNative : ''},
    {countryCode : 'BI', nameEnglish : 'Burundi', nameNative : 'Uburundi'},
    {countryCode : 'KH', nameEnglish : 'Cambodia', nameNative : 'កម្ពុជា'},
    {countryCode : 'CM', nameEnglish : 'Cameroon', nameNative : 'Cameroun'},
    {countryCode : 'CA', nameEnglish : 'Canada', nameNative : ''},
    {countryCode : 'IC', nameEnglish : 'Canary Islands', nameNative : 'islas Canarias'},
    {countryCode : 'CV', nameEnglish : 'Cape Verde', nameNative : 'Kabu Verdi'},
    {countryCode : 'BQ', nameEnglish : 'Caribbean Netherlands', nameNative : ''},
    {countryCode : 'KY', nameEnglish : 'Cayman Islands', nameNative : ''},
    {countryCode : 'CF', nameEnglish : 'Central African Republic', nameNative : 'République centrafricaine'},
    {countryCode : 'EA', nameEnglish : 'Ceuta and Melilla', nameNative : 'Ceuta y Melilla'},
    {countryCode : 'TD', nameEnglish : 'Chad', nameNative : 'Tchad'},
    {countryCode : 'CL', nameEnglish : 'Chile', nameNative : ''},
    {countryCode : 'CN', nameEnglish : 'China', nameNative : '中国'},
    {countryCode : 'CX', nameEnglish : 'Christmas Island', nameNative : ''},
    {countryCode : 'CP', nameEnglish : 'Clipperton Island', nameNative : ''},
    {countryCode : 'CC', nameEnglish : 'Cocos (Keeling) Islands', nameNative : 'Kepulauan Cocos (Keeling)'},
    {countryCode : 'CO', nameEnglish : 'Colombia', nameNative : ''},
    {countryCode : 'KM', nameEnglish : 'Comoros', nameNative : 'جزر القمر'},
    {countryCode : 'CD', nameEnglish : 'Congo (DRC)', nameNative : 'Jamhuri ya Kidemokrasia ya Kongo'},
    {countryCode : 'CG', nameEnglish : 'Congo (Republic)', nameNative : 'Congo-Brazzaville'},
    {countryCode : 'CK', nameEnglish : 'Cook Islands', nameNative : ''},
    {countryCode : 'CR', nameEnglish : 'Costa Rica', nameNative : ''},
    {countryCode : 'CI', nameEnglish : 'Côte d’Ivoire', nameNative : ''},
    {countryCode : 'HR', nameEnglish : 'Croatia', nameNative : 'Hrvatska'},
    {countryCode : 'CU', nameEnglish : 'Cuba', nameNative : ''},
    {countryCode : 'CW', nameEnglish : 'Curaçao', nameNative : ''},
    {countryCode : 'CY', nameEnglish : 'Cyprus', nameNative : 'Κύπρος'},
    {countryCode : 'CZ', nameEnglish : 'Czech Republic', nameNative : 'Česká republika'},
    {countryCode : 'DK', nameEnglish : 'Denmark', nameNative : 'Danmark'},
    {countryCode : 'DG', nameEnglish : 'Diego Garcia', nameNative : ''},
    {countryCode : 'DJ', nameEnglish : 'Djibouti', nameNative : ''},
    {countryCode : 'DM', nameEnglish : 'Dominica', nameNative : ''},
    {countryCode : 'DO', nameEnglish : 'Dominican Republic', nameNative : 'República Dominicana'},
    {countryCode : 'EC', nameEnglish : 'Ecuador', nameNative : ''},
    {countryCode : 'EG', nameEnglish : 'Egypt', nameNative : 'مصر'},
    {countryCode : 'SV', nameEnglish : 'El Salvador', nameNative : ''},
    {countryCode : 'GQ', nameEnglish : 'Equatorial Guinea', nameNative : 'Guinea Ecuatorial'},
    {countryCode : 'ER', nameEnglish : 'Eritrea', nameNative : ''},
    {countryCode : 'EE', nameEnglish : 'Estonia', nameNative : 'Eesti'},
    {countryCode : 'ET', nameEnglish : 'Ethiopia', nameNative : ''},
    {countryCode : 'FK', nameEnglish : 'Falkland Islands', nameNative : 'Islas Malvinas'},
    {countryCode : 'FO', nameEnglish : 'Faroe Islands', nameNative : 'Føroyar'},
    {countryCode : 'FJ', nameEnglish : 'Fiji', nameNative : ''},
    {countryCode : 'FI', nameEnglish : 'Finland', nameNative : 'Suomi'},
    {countryCode : 'FR', nameEnglish : 'France', nameNative : ''},
    {countryCode : 'GF', nameEnglish : 'French Guiana', nameNative : 'Guyane française'},
    {countryCode : 'PF', nameEnglish : 'French Polynesia', nameNative : 'Polynésie française'},
    {countryCode : 'TF', nameEnglish : 'French Southern Territories', nameNative : 'Terres australes françaises'},
    {countryCode : 'GA', nameEnglish : 'Gabon', nameNative : ''},
    {countryCode : 'GM', nameEnglish : 'Gambia', nameNative : ''},
    {countryCode : 'GE', nameEnglish : 'Georgia', nameNative : 'საქართველო'},
    {countryCode : 'DE', nameEnglish : 'Germany', nameNative : 'Deutschland'},
    {countryCode : 'GH', nameEnglish : 'Ghana', nameNative : 'Gaana'},
    {countryCode : 'GI', nameEnglish : 'Gibraltar', nameNative : ''},
    {countryCode : 'GR', nameEnglish : 'Greece', nameNative : 'Ελλάδα'},
    {countryCode : 'GL', nameEnglish : 'Greenland', nameNative : 'Kalaallit Nunaat'},
    {countryCode : 'GD', nameEnglish : 'Grenada', nameNative : ''},
    {countryCode : 'GP', nameEnglish : 'Guadeloupe', nameNative : ''},
    {countryCode : 'GU', nameEnglish : 'Guam', nameNative : ''},
    {countryCode : 'GT', nameEnglish : 'Guatemala', nameNative : ''},
    {countryCode : 'GG', nameEnglish : 'Guernsey', nameNative : ''},
    {countryCode : 'GN', nameEnglish : 'Guinea', nameNative : 'Guinée'},
    {countryCode : 'GW', nameEnglish : 'Guinea-Bissau', nameNative : 'Guiné Bissau'},
    {countryCode : 'GY', nameEnglish : 'Guyana', nameNative : ''},
    {countryCode : 'HT', nameEnglish : 'Haiti', nameNative : ''},
    {countryCode : 'HM', nameEnglish : 'Heard & McDonald Islands', nameNative : ''},
    {countryCode : 'HN', nameEnglish : 'Honduras', nameNative : ''},
    {countryCode : 'HK', nameEnglish : 'Hong Kong', nameNative : '香港'},
    {countryCode : 'HU', nameEnglish : 'Hungary', nameNative : 'Magyarország'},
    {countryCode : 'IS', nameEnglish : 'Iceland', nameNative : 'Ísland'},
    {countryCode : 'IN', nameEnglish : 'India', nameNative : 'भारत'},
    {countryCode : 'ID', nameEnglish : 'Indonesia', nameNative : ''},
    {countryCode : 'IR', nameEnglish : 'Iran', nameNative : 'ایران'},
    {countryCode : 'IQ', nameEnglish : 'Iraq', nameNative : 'العراق'},
    {countryCode : 'IE', nameEnglish : 'Ireland', nameNative : ''},
    {countryCode : 'IM', nameEnglish : 'Isle of Man', nameNative : ''},
    {countryCode : 'IL', nameEnglish : 'Israel', nameNative : 'ישראל'},
    {countryCode : 'IT', nameEnglish : 'Italy', nameNative : 'Italia'},
    {countryCode : 'JM', nameEnglish : 'Jamaica', nameNative : ''},
    {countryCode : 'JP', nameEnglish : 'Japan', nameNative : '日本'},
    {countryCode : 'JE', nameEnglish : 'Jersey', nameNative : ''},
    {countryCode : 'JO', nameEnglish : 'Jordan', nameNative : 'الأردن'},
    {countryCode : 'KZ', nameEnglish : 'Kazakhstan', nameNative : 'Казахстан'},
    {countryCode : 'KE', nameEnglish : 'Kenya', nameNative : ''},
    {countryCode : 'KI', nameEnglish : 'Kiribati', nameNative : ''},
    {countryCode : 'XK', nameEnglish : 'Kosovo', nameNative : 'Kosovë'},
    {countryCode : 'KW', nameEnglish : 'Kuwait', nameNative : 'الكويت'},
    {countryCode : 'KG', nameEnglish : 'Kyrgyzstan', nameNative : 'Кыргызстан'},
    {countryCode : 'LA', nameEnglish : 'Laos', nameNative : 'ລາວ'},
    {countryCode : 'LV', nameEnglish : 'Latvia', nameNative : 'Latvija'},
    {countryCode : 'LB', nameEnglish : 'Lebanon', nameNative : 'لبنان'},
    {countryCode : 'LS', nameEnglish : 'Lesotho', nameNative : ''},
    {countryCode : 'LR', nameEnglish : 'Liberia', nameNative : ''},
    {countryCode : 'LY', nameEnglish : 'Libya', nameNative : 'ليبيا'},
    {countryCode : 'LI', nameEnglish : 'Liechtenstein', nameNative : ''},
    {countryCode : 'LT', nameEnglish : 'Lithuania', nameNative : 'Lietuva'},
    {countryCode : 'LU', nameEnglish : 'Luxembourg', nameNative : ''},
    {countryCode : 'MO', nameEnglish : 'Macau', nameNative : '澳門'},
    {countryCode : 'MK', nameEnglish : 'Macedonia (FYROM)', nameNative : 'Македонија'},
    {countryCode : 'MG', nameEnglish : 'Madagascar', nameNative : 'Madagasikara'},
    {countryCode : 'MW', nameEnglish : 'Malawi', nameNative : ''},
    {countryCode : 'MY', nameEnglish : 'Malaysia', nameNative : ''},
    {countryCode : 'MV', nameEnglish : 'Maldives', nameNative : ''},
    {countryCode : 'ML', nameEnglish : 'Mali', nameNative : ''},
    {countryCode : 'MT', nameEnglish : 'Malta', nameNative : ''},
    {countryCode : 'MH', nameEnglish : 'Marshall Islands', nameNative : ''},
    {countryCode : 'MQ', nameEnglish : 'Martinique', nameNative : ''},
    {countryCode : 'MR', nameEnglish : 'Mauritania', nameNative : 'موريتانيا'},
    {countryCode : 'MU', nameEnglish : 'Mauritius', nameNative : 'Moris'},
    {countryCode : 'YT', nameEnglish : 'Mayotte', nameNative : ''},
    {countryCode : 'MX', nameEnglish : 'Mexico', nameNative : ''},
    {countryCode : 'FM', nameEnglish : 'Micronesia', nameNative : ''},
    {countryCode : 'MD', nameEnglish : 'Moldova', nameNative : 'Republica Moldova'},
    {countryCode : 'MC', nameEnglish : 'Monaco', nameNative : ''},
    {countryCode : 'MN', nameEnglish : 'Mongolia', nameNative : 'Монгол'},
    {countryCode : 'ME', nameEnglish : 'Montenegro', nameNative : 'Crna Gora'},
    {countryCode : 'MS', nameEnglish : 'Montserrat', nameNative : ''},
    {countryCode : 'MA', nameEnglish : 'Morocco', nameNative : 'المغرب'},
    {countryCode : 'MZ', nameEnglish : 'Mozambique', nameNative : 'Moçambique'},
    {countryCode : 'MM', nameEnglish : 'Myanmar (Burma)', nameNative : 'မြန်မာ'},
    {countryCode : 'NA', nameEnglish : 'Namibia', nameNative : 'Namibië'},
    {countryCode : 'NR', nameEnglish : 'Nauru', nameNative : ''},
    {countryCode : 'NP', nameEnglish : 'Nepal', nameNative : 'नेपाल'},
    {countryCode : 'NL', nameEnglish : 'Netherlands', nameNative : 'Nederland'},
    {countryCode : 'NC', nameEnglish : 'New Caledonia', nameNative : 'Nouvelle-Calédonie'},
    {countryCode : 'NZ', nameEnglish : 'New Zealand', nameNative : ''},
    {countryCode : 'NI', nameEnglish : 'Nicaragua', nameNative : ''},
    {countryCode : 'NE', nameEnglish : 'Niger', nameNative : 'Nijar'},
    {countryCode : 'NG', nameEnglish : 'Nigeria', nameNative : ''},
    {countryCode : 'NU', nameEnglish : 'Niue', nameNative : ''},
    {countryCode : 'NF', nameEnglish : 'Norfolk Island', nameNative : ''},
    {countryCode : 'MP', nameEnglish : 'Northern Mariana Islands', nameNative : ''},
    {countryCode : 'KP', nameEnglish : 'North Korea', nameNative : '조선 민주주의 인민 공화국'},
    {countryCode : 'NO', nameEnglish : 'Norway', nameNative : 'Norge'},
    {countryCode : 'OM', nameEnglish : 'Oman', nameNative : 'عُمان'},
    {countryCode : 'PK', nameEnglish : 'Pakistan', nameNative : 'پاکستان'},
    {countryCode : 'PW', nameEnglish : 'Palau', nameNative : ''},
    {countryCode : 'PS', nameEnglish : 'Palestine', nameNative : 'فلسطين'},
    {countryCode : 'PA', nameEnglish : 'Panama', nameNative : ''},
    {countryCode : 'PG', nameEnglish : 'Papua New Guinea', nameNative : ''},
    {countryCode : 'PY', nameEnglish : 'Paraguay', nameNative : ''},
    {countryCode : 'PE', nameEnglish : 'Peru', nameNative : 'Perú'},
    {countryCode : 'PH', nameEnglish : 'Philippines', nameNative : ''},
    {countryCode : 'PN', nameEnglish : 'Pitcairn Islands', nameNative : ''},
    {countryCode : 'PL', nameEnglish : 'Poland', nameNative : 'Polska'},
    {countryCode : 'PT', nameEnglish : 'Portugal', nameNative : ''},
    {countryCode : 'PR', nameEnglish : 'Puerto Rico', nameNative : ''},
    {countryCode : 'QA', nameEnglish : 'Qatar', nameNative : 'قطر'},
    {countryCode : 'RE', nameEnglish : 'Réunion', nameNative : 'La Réunion'},
    {countryCode : 'RO', nameEnglish : 'Romania', nameNative : 'România'},
    {countryCode : 'RU', nameEnglish : 'Russia', nameNative : 'Россия'},
    {countryCode : 'RW', nameEnglish : 'Rwanda', nameNative : ''},
    {countryCode : 'BL', nameEnglish : 'Saint Barthélemy', nameNative : 'Saint-Barthélemy'},
    {countryCode : 'SH', nameEnglish : 'Saint Helena', nameNative : ''},
    {countryCode : 'KN', nameEnglish : 'Saint Kitts and Nevis', nameNative : ''},
    {countryCode : 'LC', nameEnglish : 'Saint Lucia', nameNative : ''},
    {countryCode : 'MF', nameEnglish : 'Saint Martin', nameNative : ''},
    {countryCode : 'PM', nameEnglish : 'Saint Pierre and Miquelon', nameNative : 'Saint-Pierre-et-Miquelon'},
    {countryCode : 'WS', nameEnglish : 'Samoa', nameNative : ''},
    {countryCode : 'SM', nameEnglish : 'San Marino', nameNative : ''},
    {countryCode : 'ST', nameEnglish : 'São Tomé and Príncipe', nameNative : 'São Tomé e Príncipe'},
    {countryCode : 'SA', nameEnglish : 'Saudi Arabia', nameNative : 'المملكة العربية السعودية'},
    {countryCode : 'SN', nameEnglish : 'Senegal', nameNative : 'Sénégal'},
    {countryCode : 'RS', nameEnglish : 'Serbia', nameNative : 'Србија'},
    {countryCode : 'SC', nameEnglish : 'Seychelles', nameNative : ''},
    {countryCode : 'SL', nameEnglish : 'Sierra Leone', nameNative : ''},
    {countryCode : 'SG', nameEnglish : 'Singapore', nameNative : ''},
    {countryCode : 'SX', nameEnglish : 'Sint Maarten', nameNative : ''},
    {countryCode : 'SK', nameEnglish : 'Slovakia', nameNative : 'Slovensko'},
    {countryCode : 'SI', nameEnglish : 'Slovenia', nameNative : 'Slovenija'},
    {countryCode : 'SB', nameEnglish : 'Solomon Islands', nameNative : ''},
    {countryCode : 'SO', nameEnglish : 'Somalia', nameNative : 'Soomaaliya'},
    {countryCode : 'ZA', nameEnglish : 'South Africa', nameNative : ''},
    {countryCode : 'GS', nameEnglish : 'South Georgia & South Sandwich Islands', nameNative : ''},
    {countryCode : 'KR', nameEnglish : 'South Korea', nameNative : '대한민국'},
    {countryCode : 'SS', nameEnglish : 'South Sudan', nameNative : 'جنوب السودان'},
    {countryCode : 'ES', nameEnglish : 'Spain', nameNative : 'España'},
    {countryCode : 'LK', nameEnglish : 'Sri Lanka', nameNative : 'ශ්‍රී ලංකාව'},
    {countryCode : 'VC', nameEnglish : 'St. Vincent & Grenadines', nameNative : ''},
    {countryCode : 'SD', nameEnglish : 'Sudan', nameNative : 'السودان'},
    {countryCode : 'SR', nameEnglish : 'Suriname', nameNative : ''},
    {countryCode : 'SJ', nameEnglish : 'Svalbard and Jan Mayen', nameNative : 'Svalbard og Jan Mayen'},
    {countryCode : 'SZ', nameEnglish : 'Swaziland', nameNative : ''},
    {countryCode : 'SE', nameEnglish : 'Sweden', nameNative : 'Sverige'},
    {countryCode : 'CH', nameEnglish : 'Switzerland', nameNative : 'Schweiz'},
    {countryCode : 'SY', nameEnglish : 'Syria', nameNative : 'سوريا'},
    {countryCode : 'TW', nameEnglish : 'Taiwan', nameNative : '台灣'},
    {countryCode : 'TJ', nameEnglish : 'Tajikistan', nameNative : ''},
    {countryCode : 'TZ', nameEnglish : 'Tanzania', nameNative : ''},
    {countryCode : 'TH', nameEnglish : 'Thailand', nameNative : 'ไทย'},
    {countryCode : 'TL', nameEnglish : 'Timor-Leste', nameNative : ''},
    {countryCode : 'TG', nameEnglish : 'Togo', nameNative : ''},
    {countryCode : 'TK', nameEnglish : 'Tokelau', nameNative : ''},
    {countryCode : 'TO', nameEnglish : 'Tonga', nameNative : ''},
    {countryCode : 'TT', nameEnglish : 'Trinidad and Tobago', nameNative : ''},
    {countryCode : 'TA', nameEnglish : 'Tristan da Cunha', nameNative : ''},
    {countryCode : 'TN', nameEnglish : 'Tunisia', nameNative : 'تونس'},
    {countryCode : 'TR', nameEnglish : 'Turkey', nameNative : 'Türkiye'},
    {countryCode : 'TM', nameEnglish : 'Turkmenistan', nameNative : ''},
    {countryCode : 'TC', nameEnglish : 'Turks and Caicos Islands', nameNative : ''},
    {countryCode : 'TV', nameEnglish : 'Tuvalu', nameNative : ''},
    {countryCode : 'UM', nameEnglish : 'U.S. Outlying Islands', nameNative : ''},
    {countryCode : 'VI', nameEnglish : 'U.S. Virgin Islands', nameNative : ''},
    {countryCode : 'UG', nameEnglish : 'Uganda', nameNative : ''},
    {countryCode : 'UA', nameEnglish : 'Ukraine', nameNative : 'Україна'},
    {countryCode : 'AE', nameEnglish : 'United Arab Emirates', nameNative : 'الإمارات العربية المتحدة'},
    {countryCode : 'GB', nameEnglish : 'United Kingdom', nameNative : 'United Kingdom'},
    {countryCode : 'US', nameEnglish : 'United States', nameNative : 'United States'},
    {countryCode : 'UY', nameEnglish : 'Uruguay', nameNative : ''},
    {countryCode : 'UZ', nameEnglish : 'Uzbekistan', nameNative : 'Oʻzbekiston'},
    {countryCode : 'VU', nameEnglish : 'Vanuatu', nameNative : ''},
    {countryCode : 'VA', nameEnglish : 'Vatican City', nameNative : 'Città del Vaticano'},
    {countryCode : 'VE', nameEnglish : 'Venezuela', nameNative : ''},
    {countryCode : 'VN', nameEnglish : 'Vietnam', nameNative : 'Việt Nam'},
    {countryCode : 'WF', nameEnglish : 'Wallis and Futuna', nameNative : ''},
    {countryCode : 'EH', nameEnglish : 'Western Sahara', nameNative : 'الصحراء الغربية'},
    {countryCode : 'YE', nameEnglish : 'Yemen', nameNative : 'اليمن'},
    {countryCode : 'ZM', nameEnglish : 'Zambia', nameNative : ''},
    {countryCode : 'ZW', nameEnglish : 'Zimbabwe', nameNative : ''}
];

var pre_firstNames = [
    'Allison',
    'Arthur',
    'Ana',
    'Alex',
    'Arlene',
    'Alberto',
    'Barry',
    'Bertha',
    'Bill',
    'Bonnie',
    'Bret',
    'Beryl',
    'Chantal',
    'Cristobal',
    'Claudette',
    'Charley',
    'Cindy',
    'Chris',
    'Dean',
    'Dolly',
    'Danny',
    'Danielle',
    'Dennis',
    'Debby',
    'Don',
    'Donald',
    'Erin',
    'Edouard',
    'Erika',
    'Earl',
    'Emily',
    'Ernesto',
    'Felix',
    'Fay',
    'Fabian',
    'Frances',
    'Franklin',
    'Florence',
    'Gabielle',
    'Gustav',
    'Grace',
    'Gaston',
    'Gert',
    'Gordon',
    'Humberto',
    'Hanna',
    'Henri',
    'Hermine',
    'Harvey',
    'Helene',
    'Iris',
    'Isidore',
    'Isabel',
    'Ivan',
    'Irene',
    'Isaac',
    'Jerry',
    'John',
    'Johan',
    'Jonathan',
    'Josephine',
    'Juan',
    'Jeanne',
    'Jose',
    'Joyce',
    'Karen',
    'Kyle',
    'Kate',
    'Karl',
    'Katrina',
    'Kerry',
    'Kirk',
    'Lorenzo',
    'Lili',
    'Larry',
    'Lisa',
    'Lee',
    'Leslie',
    'Michelle',
    'Marco',
    'Mindy',
    'Mike',
    'Maria',
    'Michael',
    'Noel',
    'Nana',
    'Nicholas',
    'Nicole',
    'Nate',
    'Nadine',
    'Olga',
    'Omar',
    'Odette',
    'Otto',
    'Ophelia',
    'Oscar',
    'Pablo',
    'Paloma',
    'Peter',
    'Paula',
    'Philippe',
    'Patty',
    'Rebekah',
    'Rene',
    'Rose',
    'Richard',
    'Rita',
    'Rafael',
    'Sebastien',
    'Sally',
    'Sam',
    'Shary',
    'Simon',
    'Simone',
    'Stan',
    'Steven',
    'Sandy',
    'Tanya',
    'Teddy',
    'Teresa',
    'Tomas',
    'Tammy',
    'Tony',
    'Van',
    'Vicky',
    'Victor',
    'Virginie',
    'Vince',
    'Valerie',
    'Wendy',
    'Wilfred',
    'Wanda',
    'Walter',
    'Wilma',
    'William',
    'Kumiko',
    'Aki',
    'Miharu',
    'Chiaki',
    'Michiyo',
    'Itoe',
    'Nanaho',
    'Reina',
    'Emi',
    'Yumi',
    'Ayumi',
    'Kaori',
    'Sayuri',
    'Rie',
    'Miyuki',
    'Hitomi',
    'Naoko',
    'Miwa',
    'Etsuko',
    'Akane',
    'Kazuko',
    'Miyako',
    'Youko',
    'Sachiko',
    'Mieko',
    'Toshie',
    'Junko'
];

var pre_lastNames = [
  'Abbott',
  'Acevedo',
  'Acosta',
  'Adams',
  'Adkins',
  'Aguilar',
  'Aguirre',
  'Albert',
  'Alexander',
  'Alford',
  'Allen',
  'Allison',
  'Alston',
  'Alvarado',
  'Alvarez',
  'Anderson',
  'Andrews',
  'Anthony',
  'Armstrong',
  'Arnold',
  'Ashley',
  'Atkins',
  'Atkinson',
  'Austin',
  'Avery',
  'Avila',
  'Ayala',
  'Ayers',
  'Bailey',
  'Baird',
  'Baker',
  'Baldwin',
  'Ball',
  'Ballard',
  'Banks',
  'Barber',
  'Barker',
  'Barlow',
  'Barnes',
  'Barnett',
  'Barr',
  'Barrera',
  'Barrett',
  'Barron',
  'Barry',
  'Bartlett',
  'Barton',
  'Bass',
  'Bates',
  'Battle',
  'Bauer',
  'Baxter',
  'Beach',
  'Bean',
  'Beard',
  'Beasley',
  'Beck',
  'Becker',
  'Bell',
  'Bender',
  'Benjamin',
  'Bennett',
  'Benson',
  'Bentley',
  'Benton',
  'Berg',
  'Berger',
  'Bernard',
  'Berry',
  'Best',
  'Bird',
  'Bishop',
  'Black',
  'Blackburn',
  'Blackwell',
  'Blair',
  'Blake',
  'Blanchard',
  'Blankenship',
  'Blevins',
  'Bolton',
  'Bond',
  'Bonner',
  'Booker',
  'Boone',
  'Booth',
  'Bowen',
  'Bowers',
  'Bowman',
  'Boyd',
  'Boyer',
  'Boyle',
  'Bradford',
  'Bradley',
  'Bradshaw',
  'Brady',
  'Branch',
  'Bray',
  'Brennan',
  'Brewer',
  'Bridges',
  'Briggs',
  'Bright',
  'Britt',
  'Brock',
  'Brooks',
  'Brown',
  'Browning',
  'Bruce',
  'Bryan',
  'Bryant',
  'Buchanan',
  'Buck',
  'Buckley',
  'Buckner',
  'Bullock',
  'Burch',
  'Burgess',
  'Burke',
  'Burks',
  'Burnett',
  'Burns',
  'Burris',
  'Burt',
  'Burton',
  'Bush',
  'Butler',
  'Byers',
  'Byrd',
  'Cabrera',
  'Cain',
  'Calderon',
  'Caldwell',
  'Calhoun',
  'Callahan',
  'Camacho',
  'Cameron',
  'Campbell',
  'Campos',
  'Cannon',
  'Cantrell',
  'Cantu',
  'Cardenas',
  'Carey',
  'Carlson',
  'Carney',
  'Carpenter',
  'Carr',
  'Carrillo',
  'Carroll',
  'Carson',
  'Carter',
  'Carver',
  'Case',
  'Casey',
  'Cash',
  'Castaneda',
  'Castillo',
  'Castro',
  'Cervantes',
  'Chambers',
  'Chan',
  'Chandler',
  'Chaney',
  'Chang',
  'Chapman',
  'Charles',
  'Chase',
  'Chavez',
  'Chen',
  'Cherry',
  'Christensen',
  'Christian',
  'Church',
  'Clark',
  'Clarke',
  'Clay',
  'Clayton',
  'Clements',
  'Clemons',
  'Cleveland',
  'Cline',
  'Cobb',
  'Cochran',
  'Coffey',
  'Cohen',
  'Cole',
  'Coleman',
  'Collier',
  'Collins',
  'Colon',
  'Combs',
  'Compton',
  'Conley',
  'Conner',
  'Conrad',
  'Contreras',
  'Conway',
  'Cook',
  'Cooke',
  'Cooley',
  'Cooper',
  'Copeland',
  'Cortez',
  'Cote',
  'Cotton',
  'Cox',
  'Craft',
  'Craig',
  'Crane',
  'Crawford',
  'Crosby',
  'Cross',
  'Cruz',
  'Cummings',
  'Cunningham',
  'Curry',
  'Curtis',
  'Dale',
  'Dalton',
  'Daniel',
  'Daniels',
  'Daugherty',
  'Davenport',
  'David',
  'Davidson',
  'Davis',
  'Dawson',
  'Day',
  'Dean',
  'Decker',
  'Dejesus',
  'Delacruz',
  'Delaney',
  'Deleon',
  'Delgado',
  'Dennis',
  'Diaz',
  'Dickerson',
  'Dickson',
  'Dillard',
  'Dillon',
  'Dixon',
  'Dodson',
  'Dominguez',
  'Donaldson',
  'Donovan',
  'Dorsey',
  'Dotson',
  'Douglas',
  'Downs',
  'Doyle',
  'Drake',
  'Dudley',
  'Duffy',
  'Duke',
  'Duncan',
  'Dunlap',
  'Dunn',
  'Duran',
  'Durham',
  'Dyer',
  'Eaton',
  'Edwards',
  'Elliott',
  'Ellis',
  'Ellison',
  'Emerson',
  'England',
  'English',
  'Erickson',
  'Espinoza',
  'Estes',
  'Estrada',
  'Evans',
  'Everett',
  'Ewing',
  'Farley',
  'Farmer',
  'Farrell',
  'Faulkner',
  'Ferguson',
  'Fernandez',
  'Ferrell',
  'Fields',
  'Figueroa',
  'Finch',
  'Finley',
  'Fischer',
  'Fisher',
  'Fitzgerald',
  'Fitzpatrick',
  'Fleming',
  'Fletcher',
  'Flores',
  'Flowers',
  'Floyd',
  'Flynn',
  'Foley',
  'Forbes',
  'Ford',
  'Foreman',
  'Foster',
  'Fowler',
  'Fox',
  'Francis',
  'Franco',
  'Frank',
  'Franklin',
  'Franks',
  'Frazier',
  'Frederick',
  'Freeman',
  'French',
  'Frost',
  'Fry',
  'Frye',
  'Fuentes',
  'Fuller',
  'Fulton',
  'Gaines',
  'Gallagher',
  'Gallegos',
  'Galloway',
  'Gamble',
  'Garcia',
  'Gardner',
  'Garner',
  'Garrett',
  'Garrison',
  'Garza',
  'Gates',
  'Gay',
  'Gentry',
  'George',
  'Gibbs',
  'Gibson',
  'Gilbert',
  'Giles',
  'Gill',
  'Gillespie',
  'Gilliam',
  'Gilmore',
  'Glass',
  'Glenn',
  'Glover',
  'Goff',
  'Golden',
  'Gomez',
  'Gonzales',
  'Gonzalez',
  'Good',
  'Goodman',
  'Goodwin',
  'Gordon',
  'Gould',
  'Graham',
  'Grant',
  'Graves',
  'Gray',
  'Green',
  'Greene',
  'Greer',
  'Gregory',
  'Griffin',
  'Griffith',
  'Grimes',
  'Gross',
  'Guerra',
  'Guerrero',
  'Guthrie',
  'Gutierrez',
  'Guy',
  'Guzman',
  'Hahn',
  'Hale',
  'Haley',
  'Hall',
  'Hamilton',
  'Hammond',
  'Hampton',
  'Hancock',
  'Haney',
  'Hansen',
  'Hanson',
  'Hardin',
  'Harding',
  'Hardy',
  'Harmon',
  'Harper',
  'Harrell',
  'Harrington',
  'Harris',
  'Harrison',
  'Hart',
  'Hartman',
  'Harvey',
  'Hatfield',
  'Hawkins',
  'Hayden',
  'Hayes',
  'Haynes',
  'Hays',
  'Head',
  'Heath',
  'Hebert',
  'Henderson',
  'Hendricks',
  'Hendrix',
  'Henry',
  'Hensley',
  'Henson',
  'Herman',
  'Hernandez',
  'Herrera',
  'Herring',
  'Hess',
  'Hester',
  'Hewitt',
  'Hickman',
  'Hicks',
  'Higgins',
  'Hill',
  'Hines',
  'Hinton',
  'Hobbs',
  'Hodge',
  'Hodges',
  'Hoffman',
  'Hogan',
  'Holcomb',
  'Holden',
  'Holder',
  'Holland',
  'Holloway',
  'Holman',
  'Holmes',
  'Holt',
  'Hood',
  'Hooper',
  'Hoover',
  'Hopkins',
  'Hopper',
  'Horn',
  'Horne',
  'Horton',
  'House',
  'Houston',
  'Howard',
  'Howe',
  'Howell',
  'Hubbard',
  'Huber',
  'Hudson',
  'Huff',
  'Huffman',
  'Hughes',
  'Hull',
  'Humphrey',
  'Hunt',
  'Hunter',
  'Hurley',
  'Hurst',
  'Hutchinson',
  'Hyde',
  'Ingram',
  'Irwin',
  'Jackson',
  'Jacobs',
  'Jacobson',
  'James',
  'Jarvis',
  'Jefferson',
  'Jenkins',
  'Jennings',
  'Jensen',
  'Jimenez',
  'Johns',
  'Johnson',
  'Johnston',
  'Jones',
  'Jordan',
  'Joseph',
  'Joyce',
  'Joyner',
  'Juarez',
  'Justice',
  'Kane',
  'Kaufman',
  'Keith',
  'Keller',
  'Kelley',
  'Kelly',
  'Kemp',
  'Kennedy',
  'Kent',
  'Kerr',
  'Key',
  'Kidd',
  'Kim',
  'King',
  'Kinney',
  'Kirby',
  'Kirk',
  'Kirkland',
  'Klein',
  'Kline',
  'Knapp',
  'Knight',
  'Knowles',
  'Knox',
  'Koch',
  'Kramer',
  'Lamb',
  'Lambert',
  'Lancaster',
  'Landry',
  'Lane',
  'Lang',
  'Langley',
  'Lara',
  'Larsen',
  'Larson',
  'Lawrence',
  'Lawson',
  'Le',
  'Leach',
  'Leblanc',
  'Lee',
  'Leon',
  'Leonard',
  'Lester',
  'Levine',
  'Levy',
  'Lewis',
  'Lindsay',
  'Lindsey',
  'Little',
  'Livingston',
  'Lloyd',
  'Logan',
  'Long',
  'Lopez',
  'Lott',
  'Love',
  'Lowe',
  'Lowery',
  'Lucas',
  'Luna',
  'Lynch',
  'Lynn',
  'Lyons',
  'Macdonald',
  'Macias',
  'Mack',
  'Madden',
  'Maddox',
  'Maldonado',
  'Malone',
  'Mann',
  'Manning',
  'Marks',
  'Marquez',
  'Marsh',
  'Marshall',
  'Martin',
  'Martinez',
  'Mason',
  'Massey',
  'Mathews',
  'Mathis',
  'Matthews',
  'Maxwell',
  'May',
  'Mayer',
  'Maynard',
  'Mayo',
  'Mays',
  'Mcbride',
  'Mccall',
  'Mccarthy',
  'Mccarty',
  'Mcclain',
  'Mcclure',
  'Mcconnell',
  'Mccormick',
  'Mccoy',
  'Mccray',
  'Mccullough',
  'Mcdaniel',
  'Mcdonald',
  'Mcdowell',
  'Mcfadden',
  'Mcfarland',
  'Mcgee',
  'Mcgowan',
  'Mcguire',
  'Mcintosh',
  'Mcintyre',
  'Mckay',
  'Mckee',
  'Mckenzie',
  'Mckinney',
  'Mcknight',
  'Mclaughlin',
  'Mclean',
  'Mcleod',
  'Mcmahon',
  'Mcmillan',
  'Mcneil',
  'Mcpherson',
  'Meadows',
  'Medina',
  'Mejia',
  'Melendez',
  'Melton',
  'Mendez',
  'Mendoza',
  'Mercado',
  'Mercer',
  'Merrill',
  'Merritt',
  'Meyer',
  'Meyers',
  'Michael',
  'Middleton',
  'Miles',
  'Miller',
  'Mills',
  'Miranda',
  'Mitchell',
  'Molina',
  'Monroe',
  'Montgomery',
  'Montoya',
  'Moody',
  'Moon',
  'Mooney',
  'Moore',
  'Morales',
  'Moran',
  'Moreno',
  'Morgan',
  'Morin',
  'Morris',
  'Morrison',
  'Morrow',
  'Morse',
  'Morton',
  'Moses',
  'Mosley',
  'Moss',
  'Mueller',
  'Mullen',
  'Mullins',
  'Munoz',
  'Murphy',
  'Murray',
  'Myers',
  'Nash',
  'Navarro',
  'Neal',
  'Nelson',
  'Newman',
  'Newton',
  'Nguyen',
  'Nichols',
  'Nicholson',
  'Nielsen',
  'Nieves',
  'Nixon',
  'Noble',
  'Noel',
  'Nolan',
  'Norman',
  'Norris',
  'Norton',
  'Nunez',
  'Obrien',
  'Ochoa',
  'Oconnor',
  'Odom',
  'Odonnell',
  'Oliver',
  'Olsen',
  'Olson',
  'Oneal',
  'Oneil',
  'Oneill',
  'Orr',
  'Ortega',
  'Ortiz',
  'Osborn',
  'Osborne',
  'Owen',
  'Owens',
  'Pace',
  'Pacheco',
  'Padilla',
  'Page',
  'Palmer',
  'Park',
  'Parker',
  'Parks',
  'Parrish',
  'Parsons',
  'Pate',
  'Patel',
  'Patrick',
  'Patterson',
  'Patton',
  'Paul',
  'Payne',
  'Pearson',
  'Peck',
  'Pena',
  'Pennington',
  'Perez',
  'Perkins',
  'Perry',
  'Peters',
  'Petersen',
  'Peterson',
  'Petty',
  'Phelps',
  'Phillips',
  'Pickett',
  'Pierce',
  'Pittman',
  'Pitts',
  'Pollard',
  'Poole',
  'Pope',
  'Porter',
  'Potter',
  'Potts',
  'Powell',
  'Powers',
  'Pratt',
  'Preston',
  'Price',
  'Prince',
  'Pruitt',
  'Puckett',
  'Pugh',
  'Quinn',
  'Ramirez',
  'Ramos',
  'Ramsey',
  'Randall',
  'Randolph',
  'Rasmussen',
  'Ratliff',
  'Ray',
  'Raymond',
  'Reed',
  'Reese',
  'Reeves',
  'Reid',
  'Reilly',
  'Reyes',
  'Reynolds',
  'Rhodes',
  'Rice',
  'Rich',
  'Richard',
  'Richards',
  'Richardson',
  'Richmond',
  'Riddle',
  'Riggs',
  'Riley',
  'Rios',
  'Rivas',
  'Rivera',
  'Rivers',
  'Roach',
  'Robbins',
  'Roberson',
  'Roberts',
  'Robertson',
  'Robinson',
  'Robles',
  'Rocha',
  'Rodgers',
  'Rodriguez',
  'Rodriquez',
  'Rogers',
  'Rojas',
  'Rollins',
  'Roman',
  'Romero',
  'Rosa',
  'Rosales',
  'Rosario',
  'Rose',
  'Ross',
  'Roth',
  'Rowe',
  'Rowland',
  'Roy',
  'Ruiz',
  'Rush',
  'Russell',
  'Russo',
  'Rutledge',
  'Ryan',
  'Salas',
  'Salazar',
  'Salinas',
  'Sampson',
  'Sanchez',
  'Sanders',
  'Sandoval',
  'Sanford',
  'Santana',
  'Santiago',
  'Santos',
  'Sargent',
  'Saunders',
  'Savage',
  'Sawyer',
  'Schmidt',
  'Schneider',
  'Schroeder',
  'Schultz',
  'Schwartz',
  'Scott',
  'Sears',
  'Sellers',
  'Serrano',
  'Sexton',
  'Shaffer',
  'Shannon',
  'Sharp',
  'Sharpe',
  'Shaw',
  'Shelton',
  'Shepard',
  'Shepherd',
  'Sheppard',
  'Sherman',
  'Shields',
  'Short',
  'Silva',
  'Simmons',
  'Simon',
  'Simpson',
  'Sims',
  'Singleton',
  'Skinner',
  'Slater',
  'Sloan',
  'Small',
  'Smith',
  'Snider',
  'Snow',
  'Snyder',
  'Solis',
  'Solomon',
  'Sosa',
  'Soto',
  'Sparks',
  'Spears',
  'Spence',
  'Spencer',
  'Stafford',
  'Stanley',
  'Stanton',
  'Stark',
  'Steele',
  'Stein',
  'Stephens',
  'Stephenson',
  'Stevens',
  'Stevenson',
  'Stewart',
  'Stokes',
  'Stone',
  'Stout',
  'Strickland',
  'Strong',
  'Stuart',
  'Suarez',
  'Sullivan',
  'Summers',
  'Sutton',
  'Swanson',
  'Sweeney',
  'Sweet',
  'Sykes',
  'Talley',
  'Tanner',
  'Tate',
  'Taylor',
  'Terrell',
  'Terry',
  'Thomas',
  'Thompson',
  'Thornton',
  'Tillman',
  'Todd',
  'Torres',
  'Townsend',
  'Tran',
  'Travis',
  'Trevino',
  'Trujillo',
  'Tucker',
  'Turner',
  'Tyler',
  'Tyson',
  'Underwood',
  'Valdez',
  'Valencia',
  'Valentine',
  'Valenzuela',
  'Vance',
  'Vang',
  'Vargas',
  'Vasquez',
  'Vaughan',
  'Vaughn',
  'Vazquez',
  'Vega',
  'Velasquez',
  'Velazquez',
  'Velez',
  'Villarreal',
  'Vincent',
  'Vinson',
  'Wade',
  'Wagner',
  'Walker',
  'Wall',
  'Wallace',
  'Waller',
  'Walls',
  'Walsh',
  'Walter',
  'Walters',
  'Walton',
  'Ward',
  'Ware',
  'Warner',
  'Warren',
  'Washington',
  'Waters',
  'Watkins',
  'Watson',
  'Watts',
  'Weaver',
  'Webb',
  'Weber',
  'Webster',
  'Weeks',
  'Weiss',
  'Welch',
  'Wells',
  'West',
  'Wheeler',
  'Whitaker',
  'White',
  'Whitehead',
  'Whitfield',
  'Whitley',
  'Whitney',
  'Wiggins',
  'Wilcox',
  'Wilder',
  'Wiley',
  'Wilkerson',
  'Wilkins',
  'Wilkinson',
  'William',
  'Williams',
  'Williamson',
  'Willis',
  'Wilson',
  'Winters',
  'Wise',
  'Witt',
  'Wolf',
  'Wolfe',
  'Wong',
  'Wood',
  'Woodard',
  'Woods',
  'Woodward',
  'Wooten',
  'Workman',
  'Wright',
  'Wyatt',
  'Wynn',
  'Yang',
  'Yates',
  'York',
  'Young',
  'Zamora',
  'Zimmerman'
];

var pre_uomWeightsPlural = [
    'tons',
    'ounces',
    'pounds',
    'stones',
    'milligrams',
    'grams',
    'kilograms',
];