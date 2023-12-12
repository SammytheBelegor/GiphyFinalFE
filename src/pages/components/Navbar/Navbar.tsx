import {Button, Input, Space} from 'antd';
import {observer} from "mobx-react-lite";
import Search from "antd/es/input/Search";
import gifsStore from "../../../store/gifsStore";
import {useEffect} from "react";
import {Link} from "react-router-dom";

const Navbar: React.FunctionComponent<object> = () => {
    const onSearch = (value: string) => gifsStore.loadSearchedGifs("10", value);
    const onClear = () => gifsStore.clearSearch();


    useEffect(() => {
        gifsStore.loadCategories();
    }, [])

    return (
        <div className="flex flex-col w-[1470x]">
            <div className="flex justify-between align-center text-white text-1xl p-4">
                <Link to={'/'}>
                    <h1 className="text-white -mt-3">GIPHY</h1>
                </Link>
                {
                    gifsStore.categories.map((item:any, index:number) => (
                        <Link to={`/category-page/${index}`} key={item.id} onClick={() => gifsStore.setCategory(item.name)} >
                            <h5 className="text-white border-b-8 border-b-indigo-500">{item.name}</h5>
                        </Link>
                    ))
                }
                <div className='flex gap-2' >
                    <Button>Upload</Button>
                    <Button>Create</Button>
                    <Button className='w-24' >LOGIN</Button>
                </div>

            </div>
            <Space direction="vertical" className="w-[1450x]" >
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="middle"
                    onSearch={onSearch}
                    onEmptied={onClear}
                />
            </Space>
        </div>
    )
}

export default  observer(Navbar);