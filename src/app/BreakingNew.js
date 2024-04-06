import { MdDoubleArrow } from "react-icons/md";

const BreakingNew = () => {
  return (
    <section className="breaking" style={{ paddingBottom: 1, }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breaking__wrapper d-flex align-items-center"style={{ backgroundColor: '#a01f1f', borderRadius: '5px',boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px',border: '2px solid black' }} >
              <h5 className="breaking__title flex-shrink-0 p-0 pl-2" style={{ backgroundColor: '#a01f1f' }}>Breaking News <MdDoubleArrow size={28} /></h5>
              <div className=" w-100" >
                <marquee className="text-white" style={{ padding: '6px 8px 0px 8px', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', fontSize: '18px',  }} behavior="" direction="left">
                  "प्रधानमंत्री की लक्ष्यद्वीप यात्रा से यह देश क्यों तिलमिलाया
                  है..पढ़िए ख़ास खबर"
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default BreakingNew;
