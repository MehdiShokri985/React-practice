
//Conditional rendering
// if-else
//ternary operator

function Header(){
    const isLogin = true;


        return(
            <header>
                {/* {isLogin ? <button>Dashboard</button> : <button>Login</button>} */}
                {isLogin ? (
                    <>
                    <button>Dashboard</button> 
                    </>
                    ):(<button>Login</button> )
                }
                    
                {isLogin && <button>Cart</button>  }
            </header>
        );
    

    
}

export default Header;