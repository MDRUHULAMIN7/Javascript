function a(){
    console.log('i am a function a')
}
function b(){
    console.log('i am a function b')
}

a()

b()


/*JavaScript er evolution 

**Shurute JavaScript interpreted chiloo:**
- JavaScript first e ashsiloo as a purely interpreted language
- Web browsers e directly execute hotoo

**2008 e V8 Engine ashar por change eshe geloo:**
- Google Chrome er engineers JIT (Just-In-Time) compiler niye ashloo
- JavaScript engine create kora hoy C++ diye
- But JavaScript itself kono typed language na

**Type related problem gula:**
- JavaScript e variable declare korar somoy type define korina
- Kintu JavaScript engine C++ diye create, ja ekta typed language
- Tai engine ke detect korte hoy kon variable ki type
- Ete first e onek time lagtoo execute korar age

**JIT Compiler ki problem solve korloo:**
1. **Execution speed** barallo
2. **Debugging** easy holo
3. **Type detection** er problem solve holo
4. **Compiled system** e convert howar fole performance better holo

**JIT er kajer niyom:**
- Jokhon jeta dorkar seta instant compile kore
- Behind the scene JIT compiler use hoy
- Eta interpreted er moto - jokhon jeta dorkar seta compile kore
- But overall performance compiled language er moton

**Tai aktu confusing je:**
- JavaScript ki compiled naki interpreted?
- Answer: Modern JavaScript engines use **JIT compilation**
- Eta hybrid system - both interpreted and compiled er advantage nei

**JIT er 3 ta main step:**
1. **Parser** - Code ke AST (Abstract Syntax Tree) e convert kore
2. **Interpreter** - Fast execution er jonno bytecode generate kore  
3. **Compiler** - Hot code paths optimize kore machine code e convert kore

**Eibar JavaScript ke bola hoy: **JIT Compiled** - best of both worlds */




/*
**Interpreted language er kaj process:**
Jokhon apni interpreted language e code likhben, tokhon sei code ta run korte parben directly. Alada kono process dorkar hoy na. Jokhon jei code ta run korte dorkar hobe, seti real time e machine code e convert hoy. Ei process ta easy kintu relatively slow, karon protibar porer code er jonno wait korte hoy - kokhon abar time asbe ami run hobo.

**Compiled language er kaj process:**
Jokhon apni compiled language e code execution korben, first e execute korte parben na. First e puro source code ke build korte hobe, tarpor puro source code 100% thik thakle machine code e convert hoy, then execute hoy. Eta arektu organized way.

**Interpreted language er advantages:**
- Fast development and testing possible
- Platform independence beshi
- Code change kore sath sath dekha jay
- Debugging easy

**Interpreted language er disadvantages:**
- Execution speed kom
- Runtime e beshi memory use
- User er computer e interpreter install thakte hoy

**Compiled language er advantages:**
- Execution speed beshi
- Directly machine code e convert hoye fast kaj kore
- User er kache shudhu executable file dilei hoy
- Memory efficiency valo

**Compiled language er disadvantages:**
- Development cycle long
- Different platform er jonno alada compile korte hoy
- Debugging complex
- Code change korle abar compile korte hoy

**Conclusion:**
Dui rokom language er nijer application field ase. Fast development ar cross-platform compatibility er jonno interpreted language (jemne: Python, JavaScript) valo, onnodike high performance application ar system programming er jonno compiled language (jemne: C++, Rust) beshi upojogi. Project er requirement onujayi suitable process choose korai best.*/