import { useEffect, useState } from 'react';
import { UserInfo } from '../../../model/UserInfo';

const TapPage = () => {
  const [count, setCount] = useState<number>(0);
  const [isScaled, setIsScaled] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>();
  useEffect(() => {
    const queryString = window.location.href;

    const urlParams = new URLSearchParams(queryString.split('#')[1]);
    const tgWebAppData = urlParams.getAll('tgWebAppData');
    const data = new URLSearchParams(tgWebAppData[0]);
    const user = data.get('user');
    console.log(user);
    if (user) {
      const parsedUser: UserInfo = JSON.parse(user);
      setUserInfo(parsedUser);
    } else {
      setUserInfo(undefined);
    }
  }, []);

  const handleTap = () => {
    setCount(count + 1);
    setIsScaled(true);
    setTimeout(() => {
      setIsScaled(false);
    }, 50);
  };
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center py-4 px-4">
        <h1>Hello {userInfo?.username}</h1>
      </div>
      {/* Coin Count */}
      <div className="flex justify-center items-center py-4">
        <img src="/images/coin.png" className="w-12" alt="coin" />
        <h1 className="ml-2 text-3xl font-bold select-none">{count}</h1>
        {/* <h1 className="ml-2 text-3xl font-bold select-none">{queryParams.id}</h1>
        <h1 className="ml-2 text-3xl font-bold select-none">{queryParams.name}</h1> */}
      </div>

      {/* Golden Coin */}
      <div className="flex justify-center py-4">
        <button
          onClick={() => {
            handleTap();
          }}
        >
          <img src="/images/golden.png" id="coin" className={`w-72 select-none ${isScaled ? 'scale-105' : 'scale-100'}`} alt="golden coin" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center">
        <div className="w-3/5 h-2 bg-gray-700 mt-6">
          <div className="bg-yellow-400 h-2" style={{ width: '50%' }}></div>
        </div>
      </div>

      {/* Power and Menu */}
      <div className="mt-5 flex justify-center">
        <img src="/images/thunder.png" className="w-10" alt="thunder" />
        <div>
          <span className="block text-lg font-bold select-none">0 / 0</span>
        </div>
      </div>
    </div>
  );
};

export default TapPage;
