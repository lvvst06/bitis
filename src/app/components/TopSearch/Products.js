export default function Product({ products }) {
  return (
    <div className="section-products flex flex-wrap justify-between" >
        {products.items.map(product => (
          <div key={product.url} className="section-product">
              <div className="product-box-img auto-crop">
                <div className="product-label">
                  <div className="pro-freeship">Freeship</div>
                </div>
                <div className="product-favorite onwishlist_btn_add" data-id="1056578122" data-price="90118000" data-title={product.name} >
                  <img className="icon-wishtlist" alt="favorite" src="/fav.svg"/>
                </div>
                <div className="product-boxImg-inner auto-crop">
                  <div className="product-boxImg-flex">
                    <a href={product.url} aria-label={product.name} title={product.name}>
                      <img
                        className="first-image"
                        width={260}
                        height={260}
                        src={product.image1}
                        alt={product.name}
                        loading="lazy"
                      />
                      <img
                        className="second-image"
                        width={260}
                        height={260}
                        src={product.image2}
                        alt={product.name}
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
                <div className="frame-sale" />
              </div>
              <div className="px-[8px] mb-[16px]">
                <div className="product-box-variable flex items-center justify-between">
                  <div className="box-number-size">{product.size} Size</div>
                  <div className="box-number-color">{product.color} Màu sắc</div>
                </div>
                <a href={product.url} arial-label={product.name} title={product.name}>{product.name}</a>
                <div className="product-box-price flex items-center justify-between flex-wrap">
                  <div className="main-price-sale">{product.salePrice}</div>
                  <del className="main-price-del">{product.price}</del>
                  <span className="sale-price-discount">{product.salePercentage}</span>
                </div>
              </div>
            </div>
        ))}
    </div>
  );
}
