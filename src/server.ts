import { createConnection } from 'typeorm';
import app from './index'

createConnection().then(() => {
  console.log('Connected to databae =)')
})

app.listen(3000, () => {
  console.log('server running on port: 3000')
})