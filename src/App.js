import logo from './logo.svg';
import Products from './Components/Prdoduct/Products'
import "./Components/Prdoduct/Products.css"
import React, {useState} from "react";
import Cart from "./Components/Cart/Cart";
import Account from "./Components/Account/Account";
import Payment from "./Components/Payment/Payment";

const DUMMY_PRODUCT_DATAS = [
    {
        id: "1",
        productType: "PC",
        imageRef: './Components/src/images/Asus X515JA.jpg',
        title: "Asus X515JA 10.Nesil Core i5 1035G1-8Gb-256Gb Ssd-15.6inc-W11",
        category: "Asus",
        amount: 6999,
        description: "ASUS X515JA-EJ2629W NOTEBOOK\n" +
            " \n" +
            "\n" +
            "Kolay taşınabilirlik. Zahmetsiz üretkenlik.\n" +
            " \n" +
            "İster iş ister oyun için olsun, ASUS X515 güçlü performans ve sürükleyici görseller sunan giriş seviyesi bir dizüstü bilgisayardır. NanoEdge ekranı, gerçekten ilgi çekici bir deneyim için geniş 178° görüntüleme açısı ve mat parlama önleyici kaplamaya sahiptir. İçinde, hızlı çalışan bir RAM'e sahip bir 10.Nesil Intel® Core™ i5 işlemci ile güçlendirilmiştir .Yüksek depolama kapasitesi ve hızlı veri okuma/yazma hızları ile size mükemmel bir kombinasyon sağlar."
    },
    {
        id: "2",
        productType: "PC",
        imageRef: "src/images/AsusTuf.jpg",

        title: "Asus Tuf Gaming 15 10.Nesil Core i5 10300H-8Gb-512Gb Ssd-15.6inc-Gtx1650 4Gb-W10",
        amount: 13340,
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
        productType: "PC",
        imageRef: "src/images/Monster Abra A5.jpg",
        title: "Monster Abra A5 V17.2.3 Intel Core I5 11400H 16GB 500GB SSD RTX3050Ti Freedos 15.6'' FHD ABRA A5 V17.2.3",
        amount: 14629,
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
        productType: "PC",
        imageRef: "src/images/Monster300hz.jpg",
        title: "Monster Tulpar T7 V25.1.2 Intel Core I7 11800h 16gb 1tb Ssd Rtx3060 Freedos 17.3'' Fhd 300 Hz",
        amount: 23499,
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
        productType: "PC",
        imageRef: "src/images/Monster3060.jpg",
        title: "Monster Tulpar T7 V20.4.1 Intel Core I7 11800H 16GB 1TB SSD RTX3060 Windows 11 17.3'' FHD",
        amount: 23844,
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
        productType: "PC",
        imageRef: "src/images/AppleMacbookAir.jpg",
        title: "Apple Macbook Air 13'' M1 8gb 256gb Ssd Uzay Grisi MGN63TU/A",
        amount: 14297,
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
        productType: "PC",
        imageRef: "src/images/AppleMacbookAir16gb.jpg",
        title: "Apple Macbook Pro 14\" M1 Pro 16 gb 512gb Ssd Gümüş MKGR3TU/A",
        amount: 30335,
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
    {
        id: "8",
        productType: "TV",
        imageRef: './Components/src/images/Asus X515JA.jpg',
        title: "Tüplü Televizyon",
        category: "Simens",
        amount: 250,
        description: "Tüplü televizyon\n" +
            " \n" +
            "\n" +
            "Zor taşınabilirlik. Zahmetli .\n" +
            "Açması yarım saat sürer" +
            " \n" +
            "İster iş ister oyun için olsun, cızırtılı görüntü sağlar."
    },
    {
        id: "9",
        productType: "TV",
        imageRef: './Components/src/images/Asus X515JA.jpg',
        title: "Cafcaflı Televizyon",
        category: "LG",
        amount: 25000,
        description: "Cafcaflı televizyon\n" +
            " \n" +
            "\n" +
            "İnce. zahmetsiz .\n" +
            "siz daha söylemeden açılır" +
            " \n" +
            "RGB IŞıQlı MıŞıQlı. 3500 DpS QuMMaNDa"
    }
]

const UsersData = [{ad: "Cemal Can Yıldırım", mail: "cemal", password: "111",},
    {ad: "Bekir Onur Ayçiçek", mail: "bekir", password: "222"},
    {ad: "Umut Sarıdede", mail: "umut", password: "1313"}]
const App = () => {
    const [getuserloginSuccesed, setuserloginSuccesed] = useState(false)
    const [getmailInfo, setmailInfo] = useState("")
    const mailChanged = (event) => {
        setmailInfo(event.target.value)
    }
    const [getpasword, setpassword] = useState("")
    const passwordChanged = (event) => {
        setpassword(event.target.value)
    }
    const [gettotalMoney, settotalMoney] = useState(0)
    const updateTotalMoney = () => {
        let totalmoney = 0
        getOrders.map(order => {
            //(order.key)
            //(itemdata.amount)
            (DUMMY_PRODUCT_DATAS.filter(itemdata => itemdata.id == order.key).map(item => {
                if (item.amount > 0) {
                    totalmoney += item.amount * order.counter

                }
            }))
            settotalMoney(totalmoney)
        })
        // props.orders.map(order => console.log(order.amount)).map(amount => totalmoney += amount)


    }
    const getData = () => {
        return {
            mail: getmailInfo,
            password: getpasword
        }
    }
    const accountData = () => {
        const data = verifyAccount(getData())
        if (data.length < 1) {
            console.log("User Not Found")
        } else {
        }
        return data

    }
    const verifyAccount = data => {
        const targetData = UsersData.filter(userdata => {
            if (userdata.mail == data.mail && userdata.password == data.password) {
                return true;
            }
            return false
        })
        return targetData
    }

    const ClearAllData = () => {
        setuserloginSuccesed(false)

    }

    const [getCardNumber, setCardNumber] = useState("")
    const ChangeCardInfo = event => {
        if (event.target.value.length < getCardNumber.length) {
            setCardNumber(event.target.value)
            return
        }
        if (event.target.value.length > 19) {
            console.log("19 haneden fazla yazamazsın")
            return;
        }

        if (event.target.value.length == 4 || event.target.value.length == 9 || event.target.value.length == 14) {
            setCardNumber(event.target.value + "-")
        } else {
            setCardNumber(event.target.value)
        }

    }

    const [getOrders, setOrders] = useState([])
    const AppendToOrder = (itemkey) => {
        const sameorder = getOrders.filter((item) => {
            if (item.key == itemkey) {
                return true;
            } else {
                return false;
            }

        })

        if (sameorder.length > 0) {
            getOrders.map(item => {

                if (item.key == itemkey) {
                    item.counter += 1
                    setOrders(getOrders => [...getOrders])
                }
                return item;
            })

        } else {
            setOrders(getOrders => [...getOrders, {key: parseInt(itemkey), counter: 1}])
        }
    }
    const RemoveOrder = (itemkey) => {
        const datam = getOrders.map(item => {
            console.log(itemkey == item.key)
            if (itemkey == item.key) {
                item.counter -= 1
                console.log("item sayısı azaldı")
            }
            return item
        })
        console.log(datam)
        setOrders(eskidatam => (datam))
    }

    const [getpaymentOpened, setgetpaymentOpened] = useState(false)
    const isPayable = event => {
        console.log(getOrders.length+"  Order Length")
        if (getOrders.length > 0) {
            setgetpaymentOpened(!getpaymentOpened)
        }
    }
    return (
        <div>
            {getpaymentOpened ?
                <Payment ClearAllData={ClearAllData} totalMoney={gettotalMoney} verifyAccount={verifyAccount} getData={getData}
                         getCardNumber={getCardNumber}
                         ChangeCardInfo={ChangeCardInfo} setgetpaymentOpened={isPayable}/>

                :
                <div className="parent">
                    <div className="child1"><Products onItemAdded={AppendToOrder} itemDatas={DUMMY_PRODUCT_DATAS}/>
                    </div>
                    <div className="child2">
                        <Cart gettotalMoney={gettotalMoney} settotalMoney={settotalMoney}
                              updateTotalMoney={updateTotalMoney} OpenpaymentScreen={isPayable}
                              RemoveOrder={RemoveOrder}
                              itemDatas={DUMMY_PRODUCT_DATAS}
                              orders={getOrders}/>
                        <Account passwordChanged={passwordChanged} getpasword={getpasword} getmailInfo={getmailInfo}
                                 mailChanged={mailChanged} accountData={accountData}
                                 setuserloginSuccesed={setuserloginSuccesed}
                                 getuserloginSuccesed={getuserloginSuccesed}/>
                    </div>
                </div>
            }

        </div>
    )
        ;
}

export default App;
