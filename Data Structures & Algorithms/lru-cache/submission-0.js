class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache=[];
        this.capacity=capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let cacheItem = -1;
        let cacheItemIndex = this.cache.findIndex(a => a[0] === key);
        if(cacheItemIndex!==-1){
            let cacheItemObject = this.cache[cacheItemIndex];
            cacheItem = cacheItemObject[1];
            this.cache = this.cache.filter(a => a[0]!==key)
            this.cache = [cacheItemObject,...this.getPreparedCache()];
        }
        
        return cacheItem;
    }


    getPreparedCache() {
        return this.cache.filter((a,i) => {
            return i<this.capacity-1;
        })
    }

    print() {
        console.log(this.cache);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.find(a => a[0] === key)){
            this.cache = this.cache.filter(a => a[0]!==key)
        }
        this.cache = [[key,value],...this.getPreparedCache()]
    }
}
