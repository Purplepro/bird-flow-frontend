Bird Flow
Bird Flow is a bird watching journal and informational site, based and inpsired by sites like eBird and Live Journal

Project Purpose
As part of our Software Immersive cohort, a group of 5 was assembled to tackle the requirements of this project each focusing on specific front end and/or backend tasks like CRUD. making the frontend of the site appealing smooth to increase user experience, and saving user data to a database created by our backend team using mongodb and mongoose.

User story 🧐 🤔
As a user I want to come to a creative looking sight thats easy to navigate
As a user I want to search a bird by State and name.
As a user I want to have a journal where I can enter a bird Ive seen and the time Ive seen it.
As a user I want to update my journal and delete a entry from my journal.
How was it Built? 👨🏾‍💻👨🏽‍💻👨🏼‍💻👨🏻‍💻👨🏼‍💻
The boys split up into two teams. The backend created the routes, the database for the user to add a bird that they've seen, as well as putting the time that they've seen it, and the API that gets the data about the birds so once the front end wants to fetch the api the info will be available to them.

We built out the Journal using routes created on the front end as well using Create, Read, Update, Delete with the axios call from the api on the backend.

(Example Below)⬇️

const changeNameHandler = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };
  const changeJournalHandler = (e) => {
    setJournalEntry(e.target.value);
    console.log(journalEntry);
  };
  const changeBirdLocation = (e) => {
    setBirdLocation(e.target.value);
    console.log(birdLocation);
  };


  const submitHandler = e =>{
    e.preventDefault()
    console.log(`Name: ${userName}`)
    console.log(`Journal Entry: ${journalEntry}`)
    console.log(`Location: ${birdLocation}`)
  }
  useEffect(()=>{
    const url = `${REACT_APP_SERVER_URL}/api/journals`
    console.log(localStorage.getItem('jwtToken'))
    axios.get(url, {
      headers: {
        'Authorization': currentUser
      },
    })
    .then(response =>{
      let newJournals = response.data.journal
      console.log('New journal array from userState')

    }).catch(err =>{
      console.log('ERROR in JOURNAL Fetching data from UseEffect')
      console.log(err)
    })
  }, [])
Making a few edits to how we did this create route. We were able to complete full crud.

Build Status
Under development

Technologies
HTML
CSS
Javascript
React
MongoDB and Mongoose as the ODM
Screenshots
Homepage
Homepage Screenshot

Homepage search form
Homepage search form

Future Considerations
List of future additions and considerations here

Credits
This project is being worked on by the following extraordinary gentlemen:

Aaron Prince | Github
Chris Rachal | Github
Maurice Chevez | Github
Sebastian Gayle | Github
Shawn Dunn | Github
