import { AppContext } from './context';
import Header from './Header';
import Footer  from './Footer';

export const MyApplication = () => {
    return (
        <div>
            <AppContext.Provider value={{ 
                    developer: 'Naveen',designer:'shiv'
         }}>
               <Header></Header>
                <Footer></Footer>
            </AppContext.Provider>
        </div>
    )
}
