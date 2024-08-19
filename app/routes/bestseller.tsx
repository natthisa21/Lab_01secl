import { useState } from "react";
const todos =[
    {
        id: '100',
        title :'Manifest: 7 ขั้นตอนสู่ทุกสิ่งที่ปรารถนา ',
        author:'Roxie Nafousi',
        cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202308/587737/1000264049_front_XXL.jpg?imgname=Manifest:-7-%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%AA%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%99%E0%B8%B2",
        category:'จิตวิทยาการพัฒนาตัวเอง,การพัฒนาตัวเอง how to',
        description:'แนวทางปฏิบัติเพื่อการพัฒนาตนเองที่ได้รับความนิยมอย่างมหาศาล ซึ่งจะเปลี่ยนชีวิตคุณให้ดีขึ้น  ไม่ว่าคุณจะต้องการดึงดูดเนื้อคู่ หางานดี ๆ ซื้อบ้านในฝัน หรือเพียงแค่ค้นหาความสงบภายในและความมั่นใจมากขึ้น',
        price:'212 บาท',
        url:'https://www.naiin.com/product/detail/587737',
        Bestseller: true,
        Suggestions:false
        
      
    },
    {
        id: '200',
        title :'ATOMIC HABITS เพราะชีวิตดีได้กว่าที่เป็น',
        author:'James Clear',
        cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202007/508699/1000233967_front_XXL.jpg?imgname=ATOMIC-HABITS-%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99",
        category:'จิตวิทยาการพัฒนาตัวเอง,การพัฒนาตัวเอง how to',
        description:'นี่คือหนังสือเกี่ยวกับการเปลี่ยนแปลงนิสัย โดยใช้หลักการทางวิทยาศาสตร์มาอ้างอิงว่าการเปลี่ยนแปลงเล็กๆ ที่เล็กมากๆ จะนำไปสู่การเปลี่ยนแปลงที่ใหญ่ขึ้นได้อย่างไร ซึ่งหลักการนี้สามารถประยุกต์ใช้ได้กับทุกเรื่อง เช่น การทำงาน การเงิน ความสัมพันธ์ระหว่างบุคคล สุขภาพ ความคิดสร้างสรรค์ ไม่ว่าเป้าหมายของเราคืออะไรก็ตาม',
        price:'270 บาท',
        url:'https://www.naiin.com/product/detail/508699',
        Bestseller:true,
        Suggestions:false
        
    },
    {
        id: '300',
        title :'ช่างมันเถอะอีกไม่กี่ปีเราก็เป็นเถ้าธุลีกันหมดแล้ว',
        author:'Fujino Tomoya (ฟุจิโนะ โทโมยะ)',
        cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202402/604010/1000269382_front_XXL.jpg?imgname=%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0%E0%B8%AD%E0%B8%B5%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B5%E0%B9%80%E0%B8%A3%E0%B8%B2%E0%B8%81%E0%B9%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%96%E0%B9%89%E0%B8%B2%E0%B8%98%E0%B8%B8%E0%B8%A5%E0%B8%B5%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%A1%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7",
        category:'จิตวิทยา การพัฒนาตัวเอง , การพัฒนาตัวเอง how to',
        description:'หนังสือเล่มนี้เขียนมาเพื่อคนที่เป็นเดอะแบกมาทั้งชีวิต  คนที่พยายามเพื่อคนอื่นมากเกินไปจนลืมสนใจความรู้สึกของตัวเอง  คนที่เป็น People Pleaser ข้างนอกสดใส ข้างในแตกสลายไม่ใช่เรื่องผิดที่จะใจดีกับตัวเองบ้าง',
        price:'188 บาท',
        url:'https://www.naiin.com/product/detail/604010',
        Bestseller:true,
        Suggestions:false
    },
    {
      id: '400',
      title :'WIND BREAKER วินด์เบรกเกอร์7ฉ.ปรับปรุงMg',
      author:'ซาโตรุ นิอิ',
      cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202403/607369/1000270818_front_XXL.jpg?imgname=WIND-BREAKER-%E0%B8%A7%E0%B8%B4%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B9%80%E0%B8%9A%E0%B8%A3%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%AD%E0%B8%A3%E0%B9%8C7%E0%B8%89.%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87Mg",
      category:'การ์ตูนญี่ปุ่น มังงะ การ์ตูนไทย',
      description:'เพื่อช่วยเหลือเพื่อนร่วมห้องจากวิกฤตพวกซากุระและกลุ่มนักเรียนปี 1จึงเปิดฉากดวลเดือดกับ ‘KEEL’ทีมที่ใช้ความหวาดกลัวในการปกครองหลังได้รับความช่วยเหลือจากพวกคาจิ หัวหน้าห้องปี 2พวกเขาก็พลิกสถานการณ์ได้สำเร็จจนในที่สุดการต่อสู้ก็ดำเนินมาถึงฉากสุดท้าย!และในระหว่างที่ต่อสู้กับ KEEL ซากุระก็รู้สึกสับสนเพราะความผิดปกติที่เกิดขึ้นกับร่างกายตนการมี ‘พวกพ้อง’ เป็นครั้งแรกจะนำพาความเปลี่ยนแปลงแบบไหนมาสู่ซากุระกันแน่—!',
      price:'166 บาท',
      url:'https://www.naiin.com/product/detail/607369',
      Bestseller:false,
      Suggestions:true
  },
  {
    id: '500',
    title :'เชื่อฉันนะ เธอทำได้',
    author:'Choi Daeho',
    cover:"https://storage.naiin.com/system/application/bookstore/resource/product/202407/618275/1000273760_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B0-%E0%B9%80%E0%B8%98%E0%B8%AD%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%94%E0%B9%89",
    category:'จิตวิทยาการพัฒนาตัวเอง,การพัฒนาตัวเอง',
    description:'เป็นหนังสือที่นักเขียนถ่ายทอดเรื่องราวผ่านประสบการณ์ของตัวเอง โดยกลั่นกรองข้อคิดในแง่มุมต่าง ๆ ผ่านประสบการณ์ของตัวเอง เช่น เราไม่ควรตัดสินใครจากการมองเพียงครั้งหนึ่ง นิสัยที่ควรยึดมั่นในชีวิตเพื่อพัฒนาชีวิตตัวเอง และมีคำคมเพื่อให้กำลังใจ ปลุกใจให้นักอ่านกล้าลุกขึ้นมาทำตามฝันของตัวเอง กล้าลงมือทำ หรือเดินทางไปตามเส้นทางที่ชีวิตต้องการ  ',
    price:'227 บาท',
    url:'https://www.naiin.com/product/detail/618275',
    Bestseller:false,
    Suggestions:true  
}
  
];

function CheckBestsell ({Bestseller}){
  if(Bestseller)
      return (
     <>
       <h1 className="text-red-900 font-bold text-3 font-medium bg-red-100 mb-2 text-center">สินค้าขายดี</h1> 
       </>
     );
  else
      return(
     <>

       </>
     ); 
}
function CheckSuggestions ({Suggestions}){
  if(Suggestions)
      return (
     <>
        <h1 className="text-green-500 font-bold text-3 font-medium bg-green-100 mb-2 text-center">สินค้าแนะนำ</h1> 
       </>
     );
  else
      return(
     <>

       </>
     ); 
}

function Items({id,title,author,cover,category,description,price,url,Bestseller,Suggestions}:{ id:string,
    title:String,author:String,cover:String,category:String,description:String,price:String,url:String,Bestseller:Boolean,Suggestions:Boolean}){
    console.log("Key:",id);
    const [like,setLike] = useState(false);

    function handleClickLike(){
        if(like)
            setLike(false);
        else
            setLike(true);
    }
        return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <CheckBestsell Bestseller={Bestseller} />
        <CheckSuggestions Suggestions={Suggestions} />
      </p>
      
      <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
      <h1>ชื่อผู้แต่ง: {author}</h1>
      <img className="w-100 h-300" src={cover} />
      <div className="text-gray-900 font-bold text-xl mb-2">ราคา : {price}</div>
      <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      View
                    </button>
                  </a>
      <p className="text-gray-700 text-base">{description}</p>
    </div>

  </div>
</div>

    )
}


export default function ToDoLists(){
    const enrIitems = todos.filter(subject =>
            subject.Suggestions===true||
            subject.Suggestions===false
            
    );
    const items = enrIitems.map(Bookitem =>
    <Items id={Bookitem.id} title ={Bookitem.title} author={Bookitem.author} cover={Bookitem.cover} category={Bookitem.category} description={Bookitem.description} price={Bookitem.price} url={Bookitem.url} Bestseller={Bookitem.Bestseller} Suggestions={Bookitem.Suggestions}/>
    );

    return(
        <div className="p-5  bg-pink-300">
        <center><h1 className="text-xl font-bold">หนังสือที่น่าติดตาม</h1></center>
        <ul>{items}</ul>
        </div>
    )
}