const en_US = {
  _null: '',
  _thisLanguage: 'English',
  message_logout: 'Are you ready to quit?',
}
const api = [
  'guigu',
  'home',
  'products',
  'category',
  'product',
  'user',
  'role',
  'charts',
  'bar',
  'pie',
  'line',
  'exit',
]
api.forEach(i => en_US[i] = i[0].toUpperCase() + i.slice(1));

export default en_US;