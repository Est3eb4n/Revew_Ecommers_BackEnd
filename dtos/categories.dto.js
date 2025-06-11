export default class CategoryDTO{
        code;
        name;
        description;
        isActive;
    
        constructor(data) {
            this.code = data.code;
            this.name = data.name;
            this.description = data.description || '';
            this.isActive = data.isActive !== undefined ? data.isActive : true;
            this.updateTimestamps();
        }
}