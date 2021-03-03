import { ChainId } from '@Unicorns/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.KOVAN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.BSC_MAINNET]: '',
  [ChainId.BSC_TESTNET]: ''
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
