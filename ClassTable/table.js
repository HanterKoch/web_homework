class Table {

    constructor(){
        this.table = {};
    };

    static create(){
        return new Proxy(new Table(), {
            get(obj, key){
                if (key === 'undefined') {
                    throw new Error('error');
                }
                if (!obj[key]?.length){
                    obj[key] = new Proxy([], {
                        get(obj, key){
                            return (obj[key] == undefined) ? null : obj[key];
                        }
                    })
                };
                return obj[key];
            }
        })
    }

    select(exp){
        const table = Table.create();
        console.log(this.table.get(key))
        for (let key of this.table.keys()){
            return table[key] = exp(this.table.get(key)) ? this.table.get(key) : null;
        }
    }

}

module.exports = Table;