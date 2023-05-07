import { Component,OnInit } from '@angular/core';
import { TestApiService } from 'src/app/services/test-api.service';

@Component({
    selector:'test',
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css']
})

export class TestComponent implements OnInit{
    public nombre:string;
    public edad:number;
    public listUser:Array<any> = [];

    constructor(private _testService:TestApiService){
        this.nombre = 'Martin';
        this.edad = 20;
    }

    ngOnInit(): void {
        this.getUsuarios();
    }

    public aumentarEdad():void{
        this.edad++;
    }

    public decrementar():void{
        this.edad--;
    }

    public getUsuarios(){
        this._testService.getUser().subscribe(
            (response) => {
                this.listUser = response.data;
                console.log(this.listUser);
            },
            (error) => {
                console.error(<any>error)
            }
        );
    }

}