import { RingLoader } from 'react-spinners'

const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
}

const Loader = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Minting in progress</div>
      <RingLoader color={'#fff'} loading={true} size={30} />
    </div>
  )
}

export default Loader
