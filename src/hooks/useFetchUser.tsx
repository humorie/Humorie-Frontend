import { useEffect, useState } from 'react'
import axios from 'axios'
import { UserType } from '../components/Types'

export const useFetchUser = () => {
  const [user, setUser] = useState<UserType | null>(null)

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
        console.log('회원정보조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [])

  return user
}
