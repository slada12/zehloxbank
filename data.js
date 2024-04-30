(async function data () {
    try {
        const name = document.getElementById('user-name');
        const name1 = document.getElementById('name1');
        const useremail = document.getElementById('email');
        const balance = document.getElementById('balance');
        const balance1 = document.getElementById('balance1');
        const wallet = document.getElementById('wallet');
        const currSym = document.getElementsByClassName('curr-sym');
        const currCurr = document.getElementsByClassName('curr-curr');
        const referrals = document.getElementById('referrals');
        const pte = document.getElementById('pte');
        const reflink = document.getElementById('reflink');

        const currJson = localStorage.getItem('currency');
        const curr = JSON.parse(currJson);
        console.log(curr);

  
      // console.log(document.getElementsByClassName('user-balance')[0].textContent);
      console.log('Loading...')
      const url = 'https://chika-backend.onrender.com/api/user';
  
      const req = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'auth-token': localStorage.getItem('token'),
          'ip': localStorage.getItem('ip'),
        }
      });
  
      const res = await req.json();
      if (req.status !== 200) {
        // localStorage.removeItem('admin');
        document.location.href = '/login.html';
      } else {
  
        const { accountBalance, 
          email, 
          investmentBalance, 
          id,
          walletAddress,
          fullname,
          accountLocked,
          blackList,
          isClient,
         } = res.user;

         document.getElementById('full_name').textContent = fullname;
         document.getElementById('table_full_name').textContent = fullname;
  
         localStorage.setItem('email', email);
  
        if (accountLocked) {
          document.location.href = '/locked.html';
        }
  
        if (blackList) {
          document.location.href = '/invalid.html';
          localStorage.setItem('blackList', blackList);
        }
  
        if (isClient === true) {
          localStorage.setItem('admin', false);
          // console.log('isClient = false');
          // if (localStorage.getItem('admin') === null) {
          //   console.log('Not admin');
          //   // localStorage.setItem('admin', true);
          // }
        }

        if (!isClient) {
          localStorage.setItem('admin', true);
        };

        // Check if balance exist
        if (balance === null) {
            console.log('Not Found');
        } else {
            balance.textContent = `${curr.sym} ${accountBalance.toLocaleString('en-US')}`;
        }

        if (balance1 === null) {
          console.log('Not Found');
      } else {
          balance1.textContent = `${curr.sym} ${accountBalance.toLocaleString('en-US')}`;
      }


        //   Check if name is found
          if (name === null) {
            console.log('Not Found');
          } else {
            console.log(name);
            name.textContent = fullname;
          }

          //   Check if name is found
          if (name1 === null) {
            console.log('Not Found');
          } else {
            console.log(name);
            name1.value = fullname;
          }

        // Check if email is found
          if (useremail === null) {
            console.log('Not Found');
          } else {
            useremail.value = email
          }

        //   Check if wallet is found
          if (wallet === null) {
            console.log('Not Found')
          } else {
            wallet.value = walletAddress;
          };

          // Change the currency settings
          console.log(currSym);

          for (let i = 0; i < currSym.length; i++) {
            currSym[i].innerHTML = curr.sym; 
          }
          for (let i = 0; i < currCurr.length; i++) {
            currCurr[i].innerHTML = curr.curr;
          }

        let refUrl = `${window.location.host}/register.html?referredby=${id}`;
        document.getElementById('reflink').value = refUrl;
  
        return res.user;
      }
    } catch (error) {
      // localStorage.removeItem('admin');
      console.log(error);
    }
  } ());



  async function transfer () {
    try {
      const email = document.getElementById('email').value;
    const amount = document.getElementById('amount-admin').value;
    const bt = document.getElementById('bt-cl');

    bt.textContent = 'Transfering...';

    // console.log(amount);

    const data = {
      email,
      amount,
      investmentBalance: 0,
    };

    const url = 'https://chika-backend.onrender.com/api/user/transfer';
    // const url = 'http://localhost:5000/api/user/transfer';
  
    const req = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'auth-token': localStorage.getItem('token'),
        'ip': localStorage.getItem('ip'),
      }
    });

    const res = await req.json();
    if(req.status === 200) {
      bt.textContent = 'Trnasfer';
      return alert(res.message);
    };

    bt.textContent = 'Transfer';
    return alert(res.message);
    } catch (error) {
      console.log(error);
      bt.textContent = 'Transfer';
      return alert('No internet connection. Please check your internet connection');
    }
  };