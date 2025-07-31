import React from 'react'


     { /*  <div className="container">
        <div className="row justify-content-center ">
            <div className="col-sm-6 shadow-lg p-3 mb-5 bg-body rounded">
            <form>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
                <p className='text-center'> Don't have an account?<a href="/register">Register Here</a></p>
            </form>
            </div>
            </div>
            </div>*/}
         { /*  import React from "react";

// Bootstrap CSS should be included via CDN in your public/index.html
// For example:
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />*/}

export default function Login() {
  return (
    <div className="bg-login vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
      <style>{`
        .bg-login {
          background: #1689eb;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }
        .main-window {
          position: absolute;
          top: 13%;
          left: 50%;
          transform: translateX(-50%);
          background: #2286ea;
          border-radius: 18px;
          width: 670px;
          height: 370px;
          z-index: 1;
        }
        .login-box {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -57%);
          background: #2286ea;
          border-radius: 16px;
          padding: 40px 30px;
          min-width: 350px;
          box-shadow: 0px 5px 60px 0px rgba(3,54,101,0.2);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .login-avatar {
          width: 60px;
          height: 60px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          font-size: 2.2rem;
          color: #2286ea;
        }
        .login-input {
          border: none;
          outline: none;
          border-radius: 6px;
          padding: 10px 16px;
          width: 100%;
          margin-bottom: 18px;
          font-size: 1.07rem;
        }
        .login-input[type="password"] {
          letter-spacing: 0.2em;
        }
        .login-btn {
          width: 100%;
          background: #1b61d1;
          color: #fff;
          padding: 10px 0;
          font-weight: bold;
          letter-spacing: 0.08em;
          border: none;
          border-radius: 6px;
          margin-top: 4px;
          margin-bottom: 6px;
          transition: background 0.2s;
        }
        .login-btn:hover {
          background: #124b9e;
        }
        /* Flat vector people and plants */
        .floating-people {
          position: absolute;
          left: 0;
          right: 0;
          top: 59%;
          z-index: 3;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: space-between;
          width: 95vw;
          pointer-events: none;
        }
        .character-group{
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: 10px;
        }
        .plant, .plant-right {
          width: 46px;
          height: 88px;
          background: #fff;
          border-radius: 16px 16px 32px 32px / 25px 25px 80px 80px;
          position: relative;
        }
        .plant::after {
          content: '';
          position: absolute;
          left: 18px;
          top: 22px;
          width: 10px;
          height: 35px;
          background: #20deff;
          border-radius: 5px 5px 12px 12px;
          opacity: 0.4;
        }
        .plant-right::after {
          content: '';
          position: absolute;
          left: 10px;
          top: 35px;
          width: 9px;
          height: 35px;
          background: #20deff;
          border-radius: 6px 6px 12px 12px;
          opacity: 0.3;
        }
        /* Individual person mockups: Basic shape like the image, for demo only */
        .person-a, .person-b, .person-c, .person-d {
          background: #fff;
          border-radius: 35px 20px 38px 30px / 60px 26px 38px 44px;
          width: 52px;
          height: 82px;
          margin-right: -12px;
          position: relative;
        }
        .person-a {background: #e05b64;}
        .person-b {background: #192546;}
        .person-c {background: #2dbbfa;}
          .person-d {
            background: #ecdcae;
            width: 57px;
            height: 72px;
            transform: rotate(13deg);
          }
        .person-a::after,
        .person-c::after,
        .person-d::after,
        .person-b::after {
          content: '';
          display: block;
          position: absolute;
          width: 34px; height: 30px; left: 9px; top: -23px;
          background: #f7f7f7;
          border-radius: 50%;
        }
        .character-alone {
          margin-right: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .character-alone .person-d::after{
          background: #e4e5f2;
          left: 11px;
        }
        .moon {
          position: absolute;
          right: 36px;
          top: 60px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #fff;
          opacity: 0.9;
          z-index: 10;
        }
        /* Decorative trees */
        @media (max-width: 991px){
          .main-window{ width: 380px; height: 280px;}
          .floating-people{ display: none; }
        }
      `}</style>

      {/* Simple login modal */}
      <div className="main-window"></div>
      <div className="login-box">
        <div className="login-avatar">
          <i className="bi bi-person"></i>
        </div>
        <form style={{width: "100%", maxWidth: "275px"}}>
          <input className="login-input" type="text" placeholder="Username" autoFocus={true} />
          <input className="login-input" type="password" placeholder="Password" />
          <button type="submit" className="login-btn">
            CONTINUE
          </button>
        </form>
      </div>

      {/* Illustrative people and plants */}
      <div className="floating-people">
        <div className="character-group" style={{marginLeft: "4%"}}>
          <div className="plant"></div>
          <div className="person-a"></div>
          <div className="person-b"></div>
          <div className="person-c"></div>
        </div>
        <div className="character-alone" style={{marginRight: "5.5%"}}>
          <div className="person-d"></div>
          <div className="plant-right" style={{marginTop:"-21px"}}></div>
        </div>
      </div>
      <div className="moon"></div>
    </div>
  );
}
        
    

