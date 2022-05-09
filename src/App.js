import logo from './logo.svg';
import './App.css';
import Products from './Components/Products'
import "./Components/Products.css"
import React from "react";
import Cart from "./Components/Cart/Cart";

const DUMMY_PRODUCT_DATAS = [
    {
        id: "1",
        imageRef: './Components/src/images/Asus X515JA.jpg',
        title: "Asus X515JA 10.Nesil Core i5 1035G1-8Gb-256Gb Ssd-15.6inc-W11",
        category: "Asus",
        amount: 6.999,
        description: "ASUS X515JA-EJ2629W NOTEBOOK\n" +
            " \n" +
            "\n" +
            "Kolay taşınabilirlik. Zahmetsiz üretkenlik.\n" +
            " \n" +
            "İster iş ister oyun için olsun, ASUS X515 güçlü performans ve sürükleyici görseller sunan giriş seviyesi bir dizüstü bilgisayardır. NanoEdge ekranı, gerçekten ilgi çekici bir deneyim için geniş 178° görüntüleme açısı ve mat parlama önleyici kaplamaya sahiptir. İçinde, hızlı çalışan bir RAM'e sahip bir 10.Nesil Intel® Core™ i5 işlemci ile güçlendirilmiştir .Yüksek depolama kapasitesi ve hızlı veri okuma/yazma hızları ile size mükemmel bir kombinasyon sağlar."
    },
    {
        id: "2",
        imageRef: "src/images/AsusTuf.jpg",
        title: "Asus Tuf Gaming 15 10.Nesil Core i5 10300H-8Gb-512Gb Ssd-15.6inc-Gtx1650 4Gb-W10",
        amount: 13.340,
        category: "Asus",
        description: "ASUS FX506LHB-HN323W NOTEBOOK\n" +
            " \n" +
            "\n" +
            "REKABETTE ÖNE GEÇ!\n" +
            " \n" +
            "Zorlu oyun ve gerçek dünya dayanıklılığı için tasarlanan TUF Gaming F15, sizi zafere taşıyabilecek bir oyun dizüstü bilgisayarıdır. En yeni Intel® Core™ I5-10300H, CPU ve GeForce GTX 1650 GPU ile güçlendirilmiş bu oyun cavanarı aksiyon dolu oyunlarda 144Hz tazeleme hızına sahip ekranı sayesinde hızlı ve akıcıdır. IPS Level ekranı ile tamamen gerçekçi bir deneyim sunar. Standartlara kıyasla daha küçük ve daha taşınabilir bir kasaya sahip olsa da, bu oyun dizüstü bilgisayar aynı zamanda üstün pil ömrü için daha büyük bir pile sahiptir. Verimli kendi kendini temizleyen soğutma, zorlu şartlarda test edilmiş bu yol savaşçısını hareket halindeki oyuncular için güvenilir bir müttefik haline getirmek için TUF'ın askeri düzeyde dayanıklılığı ile birleşiyor."
    },
    {
        id: "3",
        imageRef: "src/images/Monster Abra A5.jpg",
        title: "Monster Abra A5 V17.2.3 Intel Core I5 11400H 16GB 500GB SSD RTX3050Ti Freedos 15.6'' FHD ABRA A5 V17.2.3",
        amount: 14.629,
        category: "Monster",
        description: "Monster Abra A5 V17.2.3 Intel Core I5 11400H 16GB 500GB SSD RTX3050Ti Freedos 15.6'' FHD\n" +
            "Bu üründen en fazla 2 adet sipariş verilebilir. 2 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.\n" +
            "Kampanya fiyatından satılmak üzere 5 adetten az stok bulunmaktadır.\n" +
            "İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.\n" +
            "Listelenen fiyat 9 Mayıs 2022 tarihine kadar geçerlidir.\n" +
            "Bu ürün indirim kampanyasına dahil değildir.\n" +
            "Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır."
    },
    {
        id: "4",
        imageRef: "src/images/Monster300hz.jpg",
        title: "Monster Tulpar T7 V25.1.2 Intel Core I7 11800h 16gb 1tb Ssd Rtx3060 Freedos 17.3'' Fhd 300 Hz",
        amount: 23.499,
        category: "Monster",
        description: "Monster Tulpar T7 V25.1.2 Intel Core I7 11800h 16gb 1tb Ssd Rtx3060 Freedos 17.3'' Fhd 300 Hz\n" +
            "Bu üründen en fazla 2 adet sipariş verilebilir. 2 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.\n" +
            "Kampanya fiyatından satılmak üzere 10 adetten fazla stok sunulmuştur.\n" +
            "İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.\n" +
            "Listelenen fiyat 9 Mayıs 2022 tarihine kadar geçerlidir.\n" +
            "Bu ürün indirim kampanyasına dahil değildir.\n" +
            "Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır."
    },
    {
        id: "5",
        imageRef: "src/images/Monster3060.jpg",
        title: "Monster Tulpar T7 V20.4.1 Intel Core I7 11800H 16GB 1TB SSD RTX3060 Windows 11 17.3'' FHD",
        amount: 23.844,
        category: "Monster",
        description: "Monster Tulpar T7 V20.4.1 Intel Core I7 11800H 16GB 1TB SSD RTX3060 Windows 11 17.3'' FHD\n" +
            "Bu üründen en fazla 2 adet sipariş verilebilir. 2 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.\n" +
            "Kampanya fiyatından satılmak üzere 10 adetten fazla stok sunulmuştur.\n" +
            "İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.\n" +
            "Listelenen fiyat 9 Mayıs 2022 tarihine kadar geçerlidir.\n" +
            "Bu ürün indirim kampanyasına dahil değildir.\n" +
            "Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır."
    },
    {
        id: "6",
        imageRef: "src/images/AppleMacbookAir.jpg",
        title: "Apple Macbook Air 13'' M1 8gb 256gb Ssd Uzay Grisi MGN63TU/A",
        amount: 14.297,
        category: "Apple",
        description: "Apple Macbook Air 13'' M1 8gb 256gb Ssd Uzay Grisi\n" +
            "Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.\n" +
            "Kampanya fiyatından satılmak üzere 10 adetten fazla stok sunulmuştur.\n" +
            "İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.\n" +
            "Listelenen fiyat 9 Mayıs 2022 tarihine kadar geçerlidir.\n" +
            "Bu ürün indirim kampanyasına dahil değildir.\n" +
            "Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır."
    },
    {
        id: "7",
        imageRef: "src/images/AppleMacbookAir16gb.jpg",
        title: "Apple Macbook Pro 14\" M1 Pro 16 gb 512gb Ssd Gümüş MKGR3TU/A",
        amount: 30.335,
        category: "Apple",
        description: "Apple Macbook Pro 14\" M1 Pro 16 gb 512gb Ssd Gümüş\n" +
            "MacBook Pro 14 inç Apple M1 Pro chip with 8?core CPU and 14?core GPU, 512GB SSD - Silver\n" +
            "Bu üründen en fazla 2 adet sipariş verilebilir. 2 adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.\n" +
            "Kampanya fiyatından satılmak üzere 5 adetten az stok bulunmaktadır.\n" +
            "İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.\n" +
            "Listelenen fiyat 9 Mayıs 2022 tarihine kadar geçerlidir.\n" +
            "Bu ürün indirim kampanyasına dahil değildir.\n" +
            "Bir ürün, birden fazla satıcı tarafından satılabilir. Birden fazla satıcı tarafından satışa sunulan ürünlerin satıcıları ürün için belirledikleri fiyata, satıcı puanlarına, teslimat statülerine, ürünlerdeki promosyonlara, kargonun bedava olup olmamasına ve ürünlerin hızlı teslimat ile teslim edilip edilememesine, ürünlerin stok ve kategorileri bilgilerine göre sıralanmaktadır."
    },
]

const App = () => {


    return (
        <div>
            <div className="parent">
                <div className="child1"><Products itemDatas={DUMMY_PRODUCT_DATAS}/></div>
                <div className="child2"><Cart/></div>


            </div>
        </div>
    )
        ;
}

export default App;
