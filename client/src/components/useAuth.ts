import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [accessToken, setAccessToken] = useState('');
  const [expiresIn, setExpiresIn] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login")
      .then(res => {
        setAccessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn);
      })
      .catch(() => {
        navigate('/');
      })
  }, []);

  useEffect(() => {
    if (!expiresIn) return
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh")
        .then(res => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
          // refresh token and write it in local storage
          let secconds = res.data.expiresIn;
          let date = new Date();
          date.setSeconds(date.getSeconds() + secconds);
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('expiresIn', JSON.stringify(date));
        })
        .catch(() => {
          navigate('/');
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [expiresIn])

  return {
    accessToken: accessToken,
    expiresIn: expiresIn
  }
}

export default useAuth;