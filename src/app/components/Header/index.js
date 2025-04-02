import Action from './Action';
import './styles.css';

const menus = [
  {
    name: "VỀ BITI'S",
    url: 'https://bitis.com.vn/pages/corporate'
  },
  {
    name: 'NAM',
    url: 'https://bitis.com.vn/collections/nam',
    submenus: [
      {
        name: 'Hunter',
        url: 'https://bitis.com.vn/collections/hunter-nam'
      },
      {
        name: 'Sandal',
        url: 'https://bitis.com.vn/collections/sandal-nam'
      },
      {
        name: 'Giày thể thao',
        url: 'https://bitis.com.vn/collections/giay-the-thao-nam'
      },
      {
        name: 'Giày Chạy Bộ & Đi Bộ',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nam//'
      },
      {
        name: 'Giày Đá Banh',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nam/'
      },
      {
        name: 'Giày Tây',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nam&'
      }
    ]
  },
  {
    name: 'NỮ',
    url: 'https://bitis.com.vn/collections/nu',
    submenus: [
      {
        name: 'Hunter',
        url: 'https://bitis.com.vn/collections/hunter-nu'
      },
      {
        name: 'Sandal',
        url: 'https://bitis.com.vn/collections/sandal-nu-1'
      },{
        name: 'Giày thể thao',
        url: 'https://bitis.com.vn/collections/giay-the-thao-nu'
      },
      {
        name: 'Giày Chạy Bộ & Đi Bộ',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nu1'
      },
      {
        name: 'Giày Cao Gót',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nu2'
      },
      {
        name: 'Giày Búp Bê',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nu3'
      },
      {
        name: 'Dép - Hài',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nu4'
      },
      {
        name: 'Túi Xách - Ví',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nu5'
      },
      {
        name: 'Balo',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nu6'
      },
      {
        name: 'Quần Áo',
        url: 'https://bitis.com.vn/collections/giay-chay-bo-di-bo-nu7'
      },
    ]
  },
  {
    name: 'BÉ TRAI',
    url: 'https://bitis.com.vn/collections/be-trai',
  },
  {
    name: 'BÉ GÁI',
    url: 'https://bitis.com.vn/collections/be-gai',
  },
  {
    name: 'TEEN',
    url: 'https://bitis.com.vn/collections/teen',
  },
  {
    name: 'PHỤ KIỆN',
    url: 'https://bitis.com.vn/collections/phu-kien',
    submenus: [
      {
        name: 'Balo',
        url: 'https://bitis.com.vn/collections/balo-tui-xach'
      },
      {
        name: 'Túi xách',
        url: 'https://bitis.com.vn/collections/tui-xach'
      },
      {
        name: 'Ví',
        url: 'https://bitis.com.vn/collections/vi-nam'
      },
    ]
  },
  {
    name: 'CHIA SẺ',
    url: 'https://bitis.com.vn/blogs/all',
  }
]

function Menus() {
  return (
    <div className="header-wrap-menu">
      <nav>
        <ul className="menu-list-primary">
          {menus.map(menu => <li key={menu.url} className={menu.submenus && "has-submenu"}>
            <a href={menu.url}>
              <span>{menu.name}</span>
              {menu.submenus && <i className="fa-chevron-down" aria-hidden="true" />}
            </a>
            {menu.submenus && (
              <ul className="menuList-submain">
                {menu.submenus.map(submenu => (
                  <li key={submenu.url}>
                    <a href={submenu.url}>
                      {submenu.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>)}
        </ul>
      </nav>
    </div>
  );
}


export default function Header() {
  return (
    <header className="main-header max-w-[1600px] px-[40px]">
      <div className="min-h-[70px] flex justify-between items-center">
        <div className="header-wrap-logo">
          <div>
            <a href="https://bitis.com.vn">
              <img
                src="/bitis_logo.webp"
                className="h-[60px]"
                alt="bitis"
                height={60}
                width="100%"
              />
            </a>
          </div>
        </div>
        <Menus />
        <Action />
      </div>
    </header>
  );
}
