
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NinosService } from '../../services/ninos.service';
import Swal from 'sweetalert2'
import * as FileSaver from 'file-saver';
import { style } from '@angular/animations';
const EXCEL_TYPE="text/plain;charset=utf-8";
const EXCEL_EXT='.csv'



@Component({
  selector: 'app-ninos',
  templateUrl: './ninos.component.html',
  styleUrls: ['./ninos.component.css']
})
export class NinosComponent implements OnInit {



  private filetmp:any;
  public documento:any;
  public name:string="documento";
  public loading:boolean=false;
  public dowload:boolean=false;
  public subir:boolean=false;
  constructor(
    private ninosService:NinosService,
    private renderer2:Renderer2
  ) { }

  ngOnInit(): void {
    const ninos={}
  }
  capturarArchivo($event:any){

    const file=$event.target.files[0];
     this.filetmp=file
     this.subir=true

     Swal.fire("recuerda revisar los datos antes de subirlos","","warning",)

     const fileData:any=document.querySelector('#update');
     this.renderer2.setStyle(fileData,"opacity",1)

     const btn_inputFile:any=document.querySelector('#btn_inputFile');
     this.renderer2.setStyle(btn_inputFile,"z-index",1)

     const block_btn:any=document.querySelector('#update_ninas');
     this.renderer2.setStyle(block_btn,"display","none")
  }

  updateData():any{
      this.loading=true
      const data= new FormData();
      data.append('data',this.filetmp)
      this.ninosService.updateData(data).subscribe((res)=>{
        if(res){
          this.loading=false
          this.dowload=true
        }
        else{
          this.loading=false
          Swal.fire("recuerda revisar los datos antes de subirlos","","warning",)
        }
      })
      console.log("ya pase por aca",data)


  }


  dowloadData(){
    this.carga()
    this.ninosService.dowloadData().subscribe((res)=>{



      if(res){
        const data: Blob= new Blob([res],{type:EXCEL_TYPE});
        FileSaver.saveAs(data,"documento"+EXCEL_EXT);
        this.dowload=false
        this.loading=false
        const block_btn:any=document.querySelector('#update_ninas');
        this.renderer2.setStyle(block_btn,"display","initial")

      }else{
        console.error("error al descargar datos")
      }


    })
  }


  carga(){
    this.loading=true


  }

}

