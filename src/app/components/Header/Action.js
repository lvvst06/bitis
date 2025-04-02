const SearchIcon = () => (
  <svg viewBox="0 0 24 27" >
    <path d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z"></path>
    <rect
      x="17"
      y="17"
      transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)"
      width="4"
      height="8"
    ></rect>
  </svg>
);

const AccountIcon = () => (
  <svg
    className="svg-ico-account"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="512"
    height="512"
    viewBox="0 0 512 512"
    style={{ enableBackground: 'new 0 0 512 512' }}
  >
    <g>
      <path
        d="M510.702,438.722c-2.251-10.813-12.84-17.754-23.657-15.503c-10.814,2.251-17.755,12.843-15.503,23.656 c1.297,6.229-0.248,12.613-4.236,17.519c-2.31,2.841-7.461,7.606-15.999,7.606H60.693c-8.538,0-13.689-4.766-15.999-7.606 c-3.989-4.905-5.533-11.29-4.236-17.519c20.756-99.695,108.691-172.521,210.24-174.977c1.759,0.068,3.526,0.102,5.302,0.102 c1.782,0,3.556-0.035,5.322-0.103c71.532,1.716,137.648,37.947,177.687,97.66c6.151,9.175,18.574,11.625,27.75,5.474 c9.174-6.151,11.625-18.575,5.473-27.749c-32.817-48.944-80.47-84.534-134.804-102.417C370.538,220.036,392,180.477,392,136 C392,61.01,330.991,0,256,0S120,61.01,120,136c0,44.504,21.488,84.084,54.633,108.911c-30.368,9.998-58.863,25.555-83.803,46.069 c-45.732,37.617-77.529,90.086-89.532,147.742c-3.762,18.067,0.745,36.623,12.363,50.909C25.222,503.847,42.365,512,60.693,512 h390.613c18.329,0,35.472-8.153,47.032-22.369C509.958,475.345,514.464,456.789,510.702,438.722z M160,136 c0-52.935,43.065-96,96-96s96,43.065,96,96c0,51.305-40.455,93.339-91.141,95.878c-1.617-0.03-3.237-0.045-4.859-0.045 c-1.614,0-3.228,0.016-4.84,0.046C200.465,229.35,160,187.312,160,136z"
        fill="#000000"
      />
    </g>
  </svg>
);

const WishlistIcon = () => (
  <svg viewBox="0 0 512 512" >
    <g>
      <g xmlns="http://www.w3.org/2000/svg" id="_1_Heart" data-name="1 Heart">
        <path
          d="m256.1 506a25 25 0 0 1 -17.68-7.35l-.2-.2-197.55-197.45c-54.12-54.13-54.12-142.2 0-196.33s142.2-54.12 196.33 0l19.1 19.1 18.9-18.9a138.83 138.83 0 0 1 196.33 0c54.12 54.13 54.12 142.2 0 196.33l-81.22 81.21a25 25 0 0 1 -35.35-35.41l81.24-81.2a88.82 88.82 0 0 0 -125.64-125.61l-36.58 36.58a25 25 0 0 1 -35.36 0l-36.78-36.77a88.82 88.82 0 0 0 -125.64 125.6l180.1 180.07 19.13-19.13a25 25 0 0 1 35.36 35.35l-36.81 36.82a25 25 0 0 1 -17.68 7.29z"
          fill="#000000"
        />
      </g>
    </g>
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 32 32" >
    <g>
      <g xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2">
        <path
          d="m16 17.82a6 6 0 0 1 -5.89-4.82 1 1 0 0 1 1-1.15 1 1 0 0 1 1 .83 4 4 0 0 0 7.83 0 1 1 0 0 1 1-.83 1 1 0 0 1 1 1.15 6 6 0 0 1 -5.94 4.82z"
          fill="#000000"
        />
        <path
          d="m24.9 31h-17.8a3 3 0 0 1 -3-3.15l.81-17.24a3 3 0 0 1 3-2.87h16.18a3 3 0 0 1 3 2.87l.81 17.24a3 3 0 0 1 -3 3.15zm-16.99-21.25a1 1 0 0 0 -1 1l-.81 17.2a1 1 0 0 0 1 1.05h17.8a1 1 0 0 0 1-1.05l-.81-17.24a1 1 0 0 0 -1-1z"
          fill="#000000"
        />
        <path
          d="m22 8.75h-2v-1.75a4 4 0 0 0 -8 0v1.75h-2v-1.75a6 6 0 0 1 12 0z"
          fill="#000000"
        />
      </g>
    </g>
  </svg>
);


export default function Action() {
  return (
    <div className="header-wrap-action">
      <div className="header-action">
        <div className="header-action-item header-wrap-search">
          <form action="/search" className="searchform-categoris">
              <input required="" id="inputSearchAuto" className="input-search" name="q" maxLength="40" autoComplete="off" type="text" size="20" data-vn="Bạn cần tìm gì..." placeholder="Bạn cần tìm gì..." />
            <button type="submit" className="btn-search btn" id="search-header-btn" aria-label="button search">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="header-action-item header-action_account">							
          <a className="header-action__link  header-action_clicked " href="#" id="site-account-handle" aria-label="Tài khoản" title="Tài khoản">
            <span className="box-icon">	
              <AccountIcon />
            </span>								
          </a>
        </div>
        <div className="header-action-item header-action_account">							
          <a className="header-action__link  header-action_clicked " href="#" id="site-account-handle" aria-label="Tài khoản" title="Tài khoản">
            <span className="box-icon">	
              <WishlistIcon />
              <span className="count-holder">
                <span className="count" id="onAppWishList_numberLike">0</span>
              </span>
            </span>								
          </a>
        </div>
        <div className="header-action-item header-action_account">							
          <a className="header-action__link  header-action_clicked " href="#" id="site-account-handle" aria-label="Tài khoản" title="Tài khoản">
            <span className="box-icon">	
              <CartIcon />
              <span className="count-holder">
                <span className="count" id="onAppWishList_numberLike">0</span>
              </span>
            </span>								
          </a>
        </div>
      </div>
    </div>
  );
}
