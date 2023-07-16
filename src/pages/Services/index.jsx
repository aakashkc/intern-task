import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { apiRequest } from '../../Redux/action/action'
import { Alert } from '../../components/common-section/Alert'
import { Loader } from '../../components/common-section/Loader'
const Service = () => {
  const dispatch = useDispatch()
  // const { data, isLoading, error } = useSelector((state) => state)
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(apiRequest())
  }, [dispatch])

  const scrollToGridItem = (itemId) => {
    const gridItem = document.querySelector(`[data-id="${itemId}"]`)
    if (gridItem) {
      gridItem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="section  bg-gray-100 " id="service">
        <div className="container mx-auto py-10 bg-gray-100 ">
          {isLoading ? (
            <div className='flex justify-center'>

              <Loader />
            </div>
          ) : error ? (
            <Alert>{error}</Alert>
          ) : (
            <>
              <div className=" relative z-20 flex flex-wrap md:flex-nowrap  flex-col md:flex-row items-center justify-center  md:p-2  space-x-1 w-[90%] mx-auto bg-white overflow-hidden rounded-md">
                {data.map((item, index) => {
                  return (
                    <div
                      className="p-1 capitalize text-xs cursor-pointer"
                      onClick={() => scrollToGridItem(item.id)}
                      key={index}
                    >
                      {item.title}
                    </div>
                  )
                })}
              </div>
              <div className="relative z-10  items-center min-h-screen  py-20 p-0 md:p-10  -mt-7 bg-gray-200  rounded-md">
                {data.map((item, index) => {
                  const isReverse = index % 2 === 1
                  return (
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 gap-10 p-1 md:p-10 ${
                        isReverse
                          ? 'md:flex flex-row-reverse'
                          : 'md:flex flex-row'
                      } `}
                      data-id={item.id}
                      key={index}
                    >
                      <div className="flex justify-center md:w-full md:h-screen p-2 border">
                        <img
                          src={item.photo}
                          alt=""
                          className=" h-auto md:h-full  max-w-full lg:object-cover"
                        />
                      </div>
                      <div className="flex flex-col space-y-4 text-[.785rem]  h-full w-full text-justify  p-2 border">
                        <div className="rounded-full">
                          <img
                            src={item.icon}
                            alt=""
                            className="h-8 w-8 rounded-full"
                          />
                        </div>
                        <h3 className="text-base md:text-[1.5rem]  md:font-semibold">
                          {item.title}
                        </h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.description1,
                          }}
                          className="text-[#333132]"
                        />
          
                        
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.description2,
                          }}
                          className="bg-[#e9ebff] p-3 md:p-6 rounded-md "
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Service
