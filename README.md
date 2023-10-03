"const createContextTEST = createContext()" ile context api oluşturulur.

Context apinin kullanılacağı Componentler Provider ile sarılır.

const testData = "BasicContextData";
&lt;createContextTEST.Provider value={testData}>
    &lt;Comp2>&lt;/Comp2>
&lt;/createContextTEST.Provider> 

Datayı kullanmak istediğimiz componentte dataya useContext ile erişilir ve kullanılır.

const data = useContext(GlobalContext);

{data}

