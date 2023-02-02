import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdataAPI } from "../store/product/product.actions";
import CardData from "./CardData";
import Funsnality from "./Funsnality";
import Pagination from "./Pagination";

const DataGrid = () => {
  const [status, setStatus] = useState("");
  const [launch, setlaunch] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state);
  console.log("data", data);

  const perPage = 10;
  const totalPages = Math.ceil(data.length / perPage);
  let end = page * perPage;
  let start = end - perPage;
  let paginatedProducts = data.slice(start, end);

  useEffect(() => {
    dispatch(getdataAPI(status, launch, type));
  }, [status,launch,type]);

  return (
    <div className="bg-slate-300">
      <h1 className="text-[40px] font-bold font-serif text-center" >SpaceX</h1>
      <br/>
      <Funsnality setStatus={setStatus} setlaunch={setlaunch} setType={setType} />
      <br/>

      {isLoading ? (
        <h1 className="font-bold text-[40px]">...Loading</h1>
      ) : (
        <div style={{width:"95%" ,margin:"auto" ,backgroundColor:"#cbd5e1"}}>
          {/* ----------------------------------data map--------------------------------- */}
          <SimpleGrid columns={[1, 2, 4]} spacing="5">
            {paginatedProducts?.map((el, index) => (
              <CardData
                key={index}
                image={
                  "https://images.foxtv.com/static.fox35orlando.com/www.fox35orlando.com/content/uploads/2020/01/932/524/22734689337_109857103f_k.jpg?ve=1&tl=1"
                }
                capsule_id={el.capsule_id}
                capsule_serial={el.capsule_serial}
                status={el.status}
                type={el.type}
                original_launch={el.original_launch?.split("T")[0]}
                data={el}
              />
            ))}
          </SimpleGrid>
        </div>
      )}

      <div className=" mt-4 w-32 flex  justify-evenly m-auto">
      <Pagination current={page} total={totalPages} onChange={setPage}/>

      </div>

     


    </div>
  );
};

export default DataGrid;
