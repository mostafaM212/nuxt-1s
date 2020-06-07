//create store
import axios from "axios";

export const state = ()=>({

  posts : {}


});

//getters   to get the post from state
export const getters = {

  posts(state){
    return state.posts ;
  }

};

//mutations   how to add post to state

export const mutations = {

  SET_POSTS(state ,posts){
    state.posts = posts
  }

};
//actions

export const actions = {

  // async nuxtServerInit({commit}) {
    //   let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts') ;
    //
    //   commit('SET_POSTS',data)
    // }

    setPosts({commit}, posts)
    {
      commit("SET_POSTS", posts);
    }

};
