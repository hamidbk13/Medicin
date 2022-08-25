export interface Pivot {
    content_id : number;
    tab_id : number ;
    content: string ;
    computed_content: string ;
    striped_tags_content: string ;
}

export interface Tabs {
    id: number ;
    name: string ;
    created_at: string ;
    updated_at: string ;
    deleted_at: null ;
    detection_token: string ;
    customer_id: number ;
    pivot: Pivot ;
}

export interface Children {
    id: number ;
    name: string ;
    created_at: string ;
    updated_at: string ;
    deleted_at: null ;
    detection_token: string ;
    parent_id: number ;
    image: string ;
    customer_id: number ;
    children: null ;
}

export interface Category {
    id: number ;
    name: string ;
    created_at: string ;
    updated_at: string ;
    deleted_at: null ;
    detection_token: string ;
    parent_id: number ;
    image: string ;
    customer_id: number ;
    children: Children ;
}

export interface Medias {
    id: number ;
    name: string ;
    type: string ;
    content_id : number ;
    created_at: string ;
    extention: string ;
    url : string ;
}

export interface Contents {
    id: number ;
    name: string ;
    created_at: string ;
    updated_at: string ;
    deleted_at: null ;
    detection_token: string ;
    en_name: string ;
    image: string ;
    user_id: number ;
    customer_id: number ;
    category_id: number ;
    medias: Medias ;
    tabs: Tabs ;
    isActive?: boolean ;
}

export interface Keywords {
    id: number ;
    name: string ;
    created_at: string ;
    updated_at: string ;
    deleted_at: null | string ;
    detection_token: string ;
    content: string ;
    customer_id : number ;
}

export interface ResData {
    status: string ;
    categories: {
        id: number ;
        name: string ;
        created_at: string ;
        updated_at: string ;
        deleted_at: null ;
        detection_token: string ;
        parent_id: number ;
        image: string ;
        customer_id: number ;
        children: {
            id: number ;
            name: string ;
            created_at: string ;
            updated_at: string ;
            deleted_at: null ;
            detection_token: string ;
            parent_id: number ;
            image: string ;
            customer_id: number ;
            children: null ;
        } ;
    };
    contents: {
        id: number ;
        name: string ;
        created_at: string ;
        updated_at: string ;
        deleted_at: null ;
        detection_token: string ;
        en_name: string ;
        image: string ;
        user_id: number ;
        customer_id: number ;
        category_id: number ;
        medias: {
            id: number ;
            name: string ;
            type: string ;
            content_id : number ;
            created_at: string ;
            extention: string ;
            url : string ;
        };
        tabs: {
            id: number ;
            name: string ;
            created_at: string ;
            updated_at: string ;
            deleted_at: null ;
            detection_token: string ;
            customer_id: number ;
            pivot: {
                content_id : number;
                tab_id : number ;
                content: string ;
                computed_content: string ;
                striped_tags_content: string ;
            } ;
        } ;
    };
    userId: number ;
    keywords: {
        id: number ;
        name: string ;
        created_at: string ;
        updated_at: string ;
        deleted_at: null | string ;
        detection_token: string ;
        content: string ;
        customer_id : number ;
    };
    customerId: number ;
}