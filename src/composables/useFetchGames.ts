import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_URL, TABS } from '@/utils/constants'
import { gamesAxiosInstance } from '@/utils/config'
import { Games } from '@/types'

export const useFetchGames = async (tabQuery: string): Promise<Games[]> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: tabQuery === TABS[0].route || !tabQuery ? `${API_URL}` : `${API_URL}?tab=${tabQuery}`,
  }

  const response: AxiosResponse<{ data: Games[] }> = await gamesAxiosInstance(config)

  return response.data.data
}
