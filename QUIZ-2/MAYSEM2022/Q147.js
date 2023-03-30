const store = new Vuex.Store({
  state: {
    companies: [
      {
        name: 'sample1',
        website: 'sample1.com',
        capital: 50000
      },
      {
        name: 'sample2',
        website: null,
        capital: 75000
      },
      {
        name: 'sample3',
        website: 'sample3.com',
        capital: 42000
      },
      {
        name: 'sample4',
        website: 'sample4.com',
        capital: 38000
      },
    ],
    awardees: []
  },
  mutations: {
    update_final(state, minimum) {
      // filter out the companies that meet the criteria
      const filteredCompanies = state.companies.filter(company => {
        return company.website && company.capital > minimum
      })

      // update the "awardees" state variable with the filtered companies
      state.awardees = filteredCompanies
    }
  },
  actions: {
    send_task(context) {
      // call the "update_final" mutation with the minimum capital as an argument
      context.commit('update_final', 40000)
    }
  }
})
//In this code, the update_final mutation filters out the companies that
//have a website and a capital of more than the given minimum amount. 
//The filtered companies are then stored in the awardees state variable.

//The send_task action calls the update_final mutation with a minimum 
//capital of 40000, as specified in the problem statement.



