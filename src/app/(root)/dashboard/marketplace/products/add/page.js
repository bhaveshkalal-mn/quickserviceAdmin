"use client"
import Save from '@/components/model/Save'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter();
       
  return (
   <>
     
        <div className='w-full px-[2%]'>
          <div className=''>
            <div className='fixed w-[20%] xl:w-[18%]  '>
               <h1 className='text-[18px] lg:text-[20px] font-normal'>New Product</h1>
               <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
                <div className='bg-[#8225AF] rounded-[6px] h-[35px] xl:h-[40px] flex place-items-center'>
                  <h1 className='px-[15px] text-[13px] xl:text-[14px] font-normal text-[white]'>Basic Details</h1>
                </div>
                <div className='border-[0.5px] border-[#EBEBEB] w-full'></div>
                 <div className='px-[15px] h-[35px] xl:h-[40px] flex place-items-center'>
                  <h1 className='text-[13px] xl:text-[14px] font-normal'>Variants & Options</h1>
                </div>
                <div className='border-[0.5px] border-[#EBEBEB] w-full'></div>
                 <div className='px-[15px] h-[35px] xl:h-[40px] flex place-items-center'>
                  <h1 className='text-[13px] xl:text-[14px] font-normal'>Media</h1>
                </div>
                <div className='border-[0.5px] border-[#EBEBEB] w-full'></div>
                 <div className='px-[15px] h-[35px] xl:h-[40px] flex place-items-center'>
                  <h1 className='text-[13px] xl:text-[14px] font-normal'>Specifications</h1>
                </div>
                <div className='border-[0.5px] border-[#EBEBEB] w-full'></div>
                 <div className='px-[15px] h-[35px] xl:h-[40px] flex place-items-center'>
                  <h1 className='text-[13px] xl:text-[14px] font-normal'>Tax Details</h1>
                </div>
                <div className='border-[0.5px] border-[#EBEBEB] w-full'></div>
                 <div className='px-[15px] h-[35px] xl:h-[40px] flex place-items-center'>
                  <h1 className='text-[13px] xl:text-[14px] font-normal'>Meta & Tags</h1>
                </div>
               </div>
            </div>
            <div className='w-[70%] xl:w-[72%]    ml-[30%] xl:ml-[28%] mb-[100px]'>
              <div className='flex justify-end items-center gap-8 lg:gap-10 '>
        <Save/>
          <div className='border-[1px] h-[24px] border-[#E2E2E2]' ></div>
           <Image alt='back' onClick={() => router.back()} width={0} height={0} className='w-[18px] lg:w-[20px] xl:w-[22px] h-[18px] lg:h-[20px] xl:h-[22px] cursor-pointer' src="/assests/selleradmin/comman/backarray.svg"/>
        </div>
          <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[19px] lg:mt-[28px] px-[15px] xl:px-[20px] py-[10px] xl:py-[15px]'>
            <h1 className='text-[14px] xl:text-[16px] font-semibold '>Basic Details</h1>
            <div className='border-[0.5px] border-[#EBEBEB] w-full mt-[10px] xl:mt-[15px]'></div>
            <div className='mt-[15px] grid grid-cols-2 gap-x-[15px] lg:gap-x-[20px] gap-y-[10px] lg:gap-y-[15px]'>
              <div>
                  <h1 className='text-[11px] xl:text-[12px] font-normal '>Product Type</h1>
                 <Select >
      <SelectTrigger className="w-[100%] mt-[5px] ">
        <SelectValue placeholder="Women" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
              </div>
              <div>
                 <h1 className='text-[11px] xl:text-[12px] font-normal '>Seller</h1>
                 <Select>
      <SelectTrigger className="w-[100%] mt-[5px]">
        <SelectValue placeholder="Galaxy Fashion Hub" />
      </SelectTrigger>
      <SelectContent>
        
         <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        
      </SelectContent>
    </Select>
              </div>
               </div>
              <div className='mt-[15px]'>
                 <h1 className='text-[11px] xl:text-[12px] font-normal '>Product Name</h1>
                 <Input className="mt-[5px]" type="title" placeholder="Designer Traditional Dress" />
              </div>
               <div className='mt-[15px]'>
                 <h1 className='text-[11px] xl:text-[12px] font-normal  '>Product Short Description</h1>
                 <Input className="mt-[5px]" type="title" placeholder="Women Floral Printed Fit & Flare Midi Dress" />
              </div>
               <div className='mt-[15px] grid grid-cols-2 gap-[15px] lg:gap-[20px]'>
              <div>
                 <h1 className='text-[11px] xl:text-[12px] font-normal  '>Brand</h1>
                 <Select>
      <SelectTrigger className="w-[100%] mt-[5px]">
        <SelectValue placeholder="M&N" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
              </div>
              <div>
                 <h1 className='text-[11px] xl:text-[12px] font-normal  '>Category </h1>
                 <Select>
      <SelectTrigger className="w-[100%] mt-[5px]">
        <SelectValue placeholder="Winter Wear" />
      </SelectTrigger>
      <SelectContent>
        
         <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        
      </SelectContent>
    </Select>
              </div>
               <div>
                 <h1 className='text-[11px] xl:text-[12px] font-normal  '>Product Code</h1>
                 <Input className="mt-[5px]" type="title" placeholder="18407738" />
              </div>
               <div>
                 <h1 className='text-[11px] xl:text-[12px] font-normal  '>SKU</h1>
                 <Input className="mt-[5px]" type="title" placeholder="-" />
              </div>
               <div>
                 <h1 className='text-[11px] xl:text-[12px] font-normal  '>Price</h1>
                 <Input className="mt-[5px]" type="title" placeholder="1000" />
              </div>
               <div>
                 <h1 className='text-[11px] xl:text-[12px] font-normal  '>MRP</h1>
                 <Input className="mt-[5px]" type="title" placeholder="2400" />
              </div>
           </div>
             <div className='mt-[15px] lg:mt-[20px] bg-[#FDF9FF] rounded-[6px] px-[15px] xl:px-[20px] py-[10px] xl:py-[15px] flex justify-end'>
              <div>
                <h1 className='text-[14px] xl:text-[16px] font-bold'>Selling Price : Rs. 1000 <del className='font-normal'>2400</del> </h1>
<h1 className='text-[16px] font-bold text-[#14820E] text-end'>39% off</h1>
              </div>
             </div>
             <div className='mt-[15px] lg:mt-[20px]'>
              <h1 className='text-[12px] xl:text-[14px] font-normal'>Product Details</h1>
              <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px] h-[300px] '>
                <div className='h-[60px]'></div>
                 <div className='border-[0.5px] border-[#EBEBEB] w-full '></div>
              </div>
             </div>
          </div>
           <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
            <div className='px-[15px] xl:px-[20px] py-[10px] xl:py-[15px]'>
            <div className='flex justify-between place-items-center'>
            <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-semibold '>Variants & Options</h1>
             <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-semibold '>Add Group</h1>
            {/* <Button className='rounded-md bg-[#8225AF] h-[40px]'>
                         <Image
                           alt='add'
                           width={0}
                           height={0}
                           src='/assests/selleradmin/comman/plusicon.svg'
                           className='w-[24px] h-[24px] cursor-pointer'
                         />
                       </Button> */}
            </div>
            <div className='border-[0.5px] border-[#EBEBEB] w-full mt-[10px] xl:mt-[15px]'></div>
            
             <div className='w-[91%] lg:w-[93%] xl:w-[95%] mt-[15px] grid grid-cols-3 '>
              <div className='w-[90%] '>
   <h1 className='text-[14px] font-semibold'>Options</h1>
              </div>
              <div className='w-[90%]'>
     <h1 className='text-[14px] font-semibold'>Option values</h1>
              </div>
              <div className='w-[90%] '>
    <h1 className='text-[14px] font-semibold'>Available Quantity</h1>
              </div>
              </div>
             <div className='flex mt-[15px] gap-[10px] xl:gap-[20px] w-[100%] justify-between'>
                <div className='w-[100%]'>
                 <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Color" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
              </div>
               
              
                <div className='w-[100%]  grid gap-[10px]'>
                 <Input type="title" placeholder="values" />
                  <Input type="title" placeholder="values" />
                   <Input type="title" placeholder="values" />
              </div>
                
              
                <div className='w-[100%]  grid gap-[10px]' >
                  <Input type="title" placeholder="Quantity" />
                   <Input type="title" placeholder="Quantity" />
                    <Input type="title" placeholder="Quantity" />
              </div>
               
                <div className=' w-[130px] lg:w-[150px] grid gap-[10px]'>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                 
                  </div> 
                  </div>
                   <div className='flex mt-[15px] gap-[10px] xl:gap-[20px] w-[100%] justify-between'>
                  <div className='w-[100%]'>
                 <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Size" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
              </div>
               
              
                <div className='w-[100%]  grid gap-[10px]'>
                 <Input type="title" placeholder="values" />
                  <Input type="title" placeholder="values" />
                 
              </div>
                
              
                <div className='w-[100%]  grid gap-[10px]' >
                  <Input type="title" placeholder="Quantity" />
                   <Input type="title" placeholder="Quantity" />
                   
              </div>
               
                <div className=' w-[130px] lg:w-[150px] grid gap-[10px]'>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                 
                 
                  </div> 
                </div>
               
            
            </div>

             <div className='border-[0.5px] border-[#EBEBEB] w-full mt-[10px] xl:mt-[15px]'></div>
             <div className='px-[15px] xl:px-[20px] py-[10px] xl:py-[15px] '>
              <div className='flex place-items-center w-[100%]'>
              <h1 className='text-[14px] xl:text-[16px] font-medium w-[200px] lg:w-[300px] xl:w-[350px]'>All variants share the same EAN/UPC</h1>
              <div className=''>
                 <RadioGroup className="flex  " defaultValue="default">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <h1 htmlFor="r1">Yes</h1>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <h1 htmlFor="r2">No</h1>
        </div>
        </RadioGroup>
        </div>
      
              </div>
              <div className='mt-[30px] flex place-items-center  w-[100%]'>
                <h1 className='text-[14px] xl:text-[16px] font-normal w-[200px] lg:w-[300px] xl:w-[350px]'>Variants</h1>
                  <h1 className='text-[14px] xl:text-[16px] font-medium'>EAN/UPC/GTIN Code</h1>
              </div>
               <div className='mt-[20px] flex place-items-center w-[100%]'>
                <h1 className='text-[14px] xl:text-[16px] font-normal w-[200px] lg:w-[300px] xl:w-[350px] '>All Variants</h1>
                <div className='w-[200px] lg:w-[300px] xl:w-[400px] '>
                 <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
    </div>
              </div>
             </div>
            </div>
<div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
 
            <div className='px-[15px] xl:px-[20px] py-[10px] xl:py-[15px]'>
               <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-semibold  '>Media</h1>
             <div className='border-[0.5px] border-[#EBEBEB] w-full mt-[10px] xl:mt-[15px]'></div>
            <div className=' mt-[10px] xl:mt-[15px]'>
           <h1 className='text-[11px] xl:text-[12px] font-normal'>Upload Image for</h1>
           <div className='w-[200px] mt-[20px]'>
                 <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Red" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
    </div>
            </div>
           <div className='mt-[10px] xl:mt-[15px] w-[100%] h-[140px] bg-[#F8F8F8] rounded-[10px] flex justify-center place-items-center'>
             <h1 className='text-[12px] xl:text-[14px] font-normal'>Drag & Drop Images</h1>
           </div>
            </div>
             <div className='border-[0.5px] border-[#EBEBEB] w-full mt-[10px] xl:mt-[15px]'></div>
              <div className='px-[15px] xl:px-[20px] py-[10px] xl:py-[15px]'>
             
          
           <h1 className='text-[12px] xl:text-[14px] font-normal'>Upload Video or Reel</h1>
            <div className='mt-[10px] xl:mt-[15px] w-[100%] h-[140px] bg-[#F8F8F8] rounded-[10px] flex justify-center place-items-center'>
             <h1 className='text-[12px] xl:text-[14px] font-normal'>Drag & Drop Images</h1>
           </div>
           </div>
           
           
           
            </div>

            <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
            <div className='px-[15px] xl:px-[20px] py-[10px] xl:py-[15px]'>
            <div className='flex justify-between place-items-center'>
            <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-semibold '>Specifications</h1>
            
            </div>
            <div className='border-[0.5px] border-[#EBEBEB] w-full mt-[10px] xl:mt-[15px]'></div>
            
             <div className='w-[90%] lg:w-[92%] xl:w-[94%] mt-[15px] grid grid-cols-2 '>
              <div className=' '>
   <h1 className='text-[14px] font-semibold'>Name</h1>
              </div>
              <div className=''>
     <h1 className='text-[14px] font-semibold'>Value</h1>
              </div>
             
              </div>
             <div className='flex mt-[15px] gap-[10px] xl:gap-[20px] w-[100%] justify-between'>
                <div className='w-[100%] grid gap-[10px]'>
                 <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Back" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
     <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Center front open" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
     <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Closure" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
     <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Coverage" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
     <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Fabrics" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
              </div>
               
              
                <div className='w-[100%]  grid gap-[10px]'>
                 <Input type="title" placeholder="values" />
                  <Input type="title" placeholder="values" />
                   <Input type="title" placeholder="values" />
                    <Input type="title" placeholder="values" />
                   <Input type="title" placeholder="values" />
              </div>
                
               
                <div className=' w-[120px] lg:w-[100px] grid gap-[10px]'>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                  <div className='border-[1px] border-[#EBEBEB] hover:bg-[#F2F7FF] rounded-[6px] h-11 flex justify-center place-items-center'>
                    <Image
                    alt='delete'
                    width={0}
                    height={0}
                    src="/assests/selleradmin/comman/deleteicon.svg"
                    className='w-[24px] h-[24px]'
                    />
                  </div>
                 
                  </div> 
                  </div>
                  
               
            
            </div>

             
            </div>

            <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
            <div className='px-[15px] xl:px-[20px] py-[10px] xl:py-[15px]'>
            <div className='flex justify-between place-items-center'>
            <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-semibold '>Tax Details</h1>
            
            </div>
            <div className='border-[0.5px] border-[#EBEBEB] w-full mt-[10px] xl:mt-[15px]'></div>
            
            
             <div className='flex  xl:gap-[20px] w-[100%] mt-[10px] xl:mt-[15px] justify-between'>
                <div className='w-[100%] grid grid-cols-2 gap-[10px]'>
                  <div>
                   <h1 className='text-[11px] xl:text-[12px] font-normal'>Tax Catagory</h1>
                 <Select  >
      <SelectTrigger className="w-[88%] mt-[5px]">
        <SelectValue placeholder="Clothing" />
      </SelectTrigger>
      <SelectContent>
        
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          
        
      </SelectContent>
    </Select>
    </div>
    <div  className='flex place-items-center'>
       <h1 className='text-[12px] xl:text-[14px] font-normal text-[#0F52BA]'>Add New Tax Catgory</h1>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className='border-[1px] border-[#EBEBEB] rounded-[6px] mt-[15px] lg:mt-[20px]'>
 
            <div className='px-[15px] xl:px-[20px] py-[10px] xl:py-[15px]'>
               <h1 className='text-[11px] lg:text-[13px] xl:text-[14px] font-semibold '>Tags</h1>
             <div className='border-[0.5px] border-[#EBEBEB] w-full mt-[10px] xl:mt-[15px]'></div>
            <div className=' mt-[10px] xl:mt-[15px]'>
           <h1 className='text-[11px] xl:text-[12px] font-normal'>Categorize your store products and organize search results for customers.</h1>
            
            </div>
           <div className='mt-[10px] xl:mt-[15px] w-[100%] h-[90px] border-[1px] border-[#EBEBEB] rounded-[10px] flex justify-center place-items-center'>
            
           </div>
            </div>
            
           
           
           
            </div>


            </div>
          </div>
     </div>
   </>
  )
}

export default page
