import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_URL } from '@/utils/constants'
import { gamesAxiosInstance } from '@/utils/config'
import { GameInfo } from '@/types'

export const useFetchGameInfo = async (id: string): Promise<GameInfo> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `${API_URL}/${id}`,
  }

  const response: AxiosResponse<{ data: GameInfo }> = await gamesAxiosInstance(config)

  return response.data.data
}
