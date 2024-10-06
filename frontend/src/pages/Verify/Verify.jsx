import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  // console.log(success, orderId);

  async function verifyPayment() {
    let verifyData = {
      success: success,
      orderId: orderId,
    };

    const response = await axios.post(url + '/api/order/verify', verifyData);
    if (response.data.success) {
      navigate('/myorders');
    } else {
      navigate('/');
    }
  }

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
