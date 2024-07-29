import React, { useState, useRef } from 'react';
import axios from 'axios';
import { message } from 'antd';

function Home() {
  const [customerName, setCustomerName] = useState();
  const [customerPhone, setCustomerPhone] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const handleCreate = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/customer', {customerName, customerPhone})
    .then((res) => {
      messageApi.open({
        type: 'success',
        content: 'Bạn đã đăng kí thành công!',
    })
  }).catch((err) => 
    {console.log(err)
      messageApi.open({
        type: 'error',
        content: 'Chưa thành công! Vui lòng đăng kí lại thông tin hoặc gọi vào hotline 0382 726 515',
    });});
  }

  const mySectionRef = useRef(null);

  const handleClick = () => {
    mySectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [error, setError] = useState('');
  const handleInputChange = (event) => {
    setCustomerPhone(event.target.value);
    validatePhoneNumber(event.target.value);
  };

  const validatePhoneNumber = (value) => {
    // Regular expression for Vietnamese phone numbers (adjust as needed)
    const phoneNumberRegex = /^(0)(3|5|7|8|9)[0-9]{8}$/;
    if (!phoneNumberRegex.test(value)) {
      setError('Số điện thoại không hợp lệ.');
    } else {
      setError('');
    }
  };
  return (
  <div style={{ height: '100vh', overflowY: 'auto' }}>
    <section className='home-wrapper-8'>
    <div className="container-xxl">
      <img src='./images/10.png'/>
    </div>
    </section>
  <section className='home-wrapper-1'>
    <div className="container-xxxl">
      <img src='./images/1.png'/>
    </div>
    </section>
    <section className='home-wrapper-2'>
    <div className="container-xxl">
      <img src='./images/11.png'/>
    </div>
    </section>
    <section className='home-wrapper-3'>
    <div className="container-xxl">
      <img src='./images/12.png'/>
    </div>
    </section>
    <section className='home-wrapper-2' style={{backgroundColor: 'white'}}>
    <div className="container-xxl">
      <img src='./images/2.png'/>
      <div className='button-1 pt-3 pb-3'>
      <button type="button" onClick={handleClick} class="btn btn-warning">ĐĂNG KÍ NGAY</button>
      </div>
    </div>
    </section>
    <section className='home-wrapper-3'>
    <div className="container-xxl">
      <img src='./images/3.png'/>
      <div className='button-1 pt-3 pb-3'>
      <button type="button" onClick={handleClick}  class="btn g">ĐĂNG KÍ NGAY</button>
      </div>
    </div>
    </section>
    <section className='home-wrapper-4' style={{backgroundColor: 'white'}}>
    <div className="container-xxl">
      <img src='./images/4.png'/>
      <div className='button-1 pt-3 pb-3'>
      <button type="button" onClick={handleClick}  class="btn">ĐĂNG KÍ NGAY</button>
      </div>
    </div>
    </section>
    <section className='home-wrapper-5'>
    <div className="container-xxl">
      <img src='./images/5.png'/>
      <div className='button-1 pt-3 pb-3'>
      <button type="button" onClick={handleClick}  class="btn">ĐĂNG KÍ NGAY</button>
      </div>
    </div>
    </section>
    <section className='home-wrapper-6' style={{backgroundColor: 'white'}}>
    <div className="container-xxl">
      <img src='./images/6.png'/>
      <div className='button-1 pt-3 pb-3'>
      <button type="button" onClick={handleClick}  class="btn">ĐĂNG KÍ NGAY</button>
      </div>
    </div>
    </section>
    <section className='home-wrapper-7'>
    <div className="container-xxl">
      <img src='./images/7.png'/>
      <div className='button-1 pt-3 pb-3'>
      <button type="button" onClick={handleClick}  class="btn">ĐĂNG KÍ NGAY</button>
      </div>
    </div>
    </section>
    <section ref={mySectionRef} className='home-wrapper-8'>
    <div className="container-xxl">
      <img src='./images/8.png'/>
      <div className='button-1 pt-3 pb-3'>
      <button class="btn" data-bs-toggle="modal" data-bs-target="#myModal">
        ĐĂNG KÍ TẠI ĐÂY
      </button>
      </div>
    </div>
    </section>
    <div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Điền thông tin đăng ki</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
      <form>
  <div class="mb-3 mt-3">
    <label for="text" required class="form-label">Họ và tên:</label>
    <input type="text" required class="form-control" id="name"
          onChange={(e) => setCustomerName(e.target.value)} placeholder="Nhập họ và tên của bạn" name="name"/>
  </div>
  <div className="mb-3">
        <label htmlFor="phone" className="form-label">Số điện thoại:</label>
        <input
          type="text"
          className="form-control" id="phone"
          placeholder="Nhập số điện thoại của bạn"
          name="phone"
          onChange={handleInputChange}
        />
        {error && <div className="text-danger pt-2">{error}</div>}
      </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" onClick={handleCreate} class="btn btn-success" data-bs-dismiss="modal">Đăng kí</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    <section className='home-wrapper-9'>
    <div className="container-xxl">
      <img src='./images/9.png'/>
    </div>
    </section>
    <section className='home-wrapper-3'>
    <div className="container-xxl">
      <img src='./images/13.png'/>
      <div className='button-1 pt-3 pb-3'>
      <button type="button" onClick={handleClick}  class="btn g">ĐĂNG KÍ NGAY</button>
      </div>
    </div>
    </section>
    {contextHolder}
    <div class="hotline-phone-ring-wrap">
	<div class="hotline-phone-ring">
		<div class="hotline-phone-ring-circle"></div>
		<div class="hotline-phone-ring-circle-fill"></div>
		<div class="hotline-phone-ring-img-circle">
		<a href="tel:0382726515" class="pps-btn-img">
			<img src="https://wiki.minhduy.vn/wp-content/uploads/2022/07/icon-call-nh.png" alt="Gọi điện thoại" width="50"/>
		</a>
		</div>
	</div>
	<div class="hotline-bar">
		<a href="tel:0382726515">
			<span class="text-hotline">0382 726 515</span>
		</a>
	</div>
</div>

    </div>
  );
}

export default Home;