import { useEffect, useState } from 'react'
import axios from 'axios'

interface UserType {
  id: number
  email: string
  accountName: string
  name: string
  emailSubscription: boolean
}

export const useFetchUser = () => {
  const [user, setUser] = useState<UserType>()

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken')

      try {
        const response = await axios.get('/api/mypage/get', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        if (response.data.isSuccess) {
          setUser(response.data.result)
        }
      } catch (error) {
        console.log('회원정보 조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [])

  return user
}
