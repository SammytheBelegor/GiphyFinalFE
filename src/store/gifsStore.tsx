import React from "react";
import {action, makeAutoObservable, observable} from "mobx";
import {fetchArtists, fetchCategories, fetchCategoryGifs, fetchGif,  fetchTrendingGifs} from "./api";
import SearchArtists from "../utils/search";


class GifsStore {
    @observable categories:any = [];
    @observable trendingGifs:any = [];
    @observable categoryGifs:any = [];
    @observable gifs:any = [];
    @observable gif:any = "";
    @observable artists:any = [];
    @observable chosenCategory:any = "";
    @observable searchedGifs:any = [];


    constructor() {
        makeAutoObservable(this)
    };

    @action
    loadGif = (id:string) => {
        fetchGif(id).then( json => this.gif = json.data)
    };

    @action
    loadTrendingGifs = (limit:string) => {
        fetchTrendingGifs(limit).then( json => this.trendingGifs =  json.data)
    };

    @action
    loadCategories = () => {
        fetchCategories().then( json => this.categories = json.data)
    };

    @action
    setCategory = (value:any) => {
         this.chosenCategory = value;
    };



    @action
    loadCategoryGifs = (limit:string) => {
        fetchCategoryGifs(limit, this.chosenCategory).then( json => this.categoryGifs = json.data)
    };

    @action
    loadSearchedGifs = (limit:string, query:string) => {
        fetchCategoryGifs(limit, query).then( json => this.searchedGifs = json.data)
    };

    @action
    clearSearch = () => {
        console.log("cleared");
        this.searchedGifs = [];
    };

    @action
    loadArtists = () => {
        SearchArtists.map((item:string) => {
            fetchArtists("1", item).then(json => this.artists.push(...json.data) )
        })
    };
}

export default new GifsStore()