import { Component, OnInit ,Renderer2} from '@angular/core';
import Swal from 'sweetalert2'
import { NinasService } from 'src/app/services/ninas.service';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
const EXCEL_TYPE="text/plain;charset=utf-8";
const EXCEL_EXT='.csv'
@Component({
  selector: 'app-ninas',
  templateUrl: './ninas.component.html',
  styleUrls: ['./ninas.component.css']
})
export class NinasComponent implements OnInit {

  private filetmp:any;
  public documento:any;
  public name:string="documento";
  public loading:boolean=false;
  public dowload:boolean=false;
  public subir:boolean=false;
  constructor(
    private ninasService:NinasService,
    private renderer2:Renderer2
  ) { }

  ngOnInit(): void {
    const ninos={}
  }
  capturarArchivo($event:any){

    const file=$event.target.files[0];
     this.filetmp=file
     this.subir=true
     Swal.fire("recuerda revisar los datos antes de subirlos","","warning")
     const fileData:any=document.querySelector('#update_ninas');
     this.renderer2.setStyle(fileData,"opacity",1)
     const block_btn:any=document.querySelector('#update');
     this.renderer2.setStyle(block_btn,"display","none")

     const btn_inputFile:any=document.querySelector('#btn_inputFile_ninas');
     this.renderer2.setStyle(btn_inputFile,"z-index",1)

  }

  updateData():any{
      this.loading=true
      const data= new FormData();
      data.append('data',this.filetmp)
      this.ninasService.updateData(data).subscribe((res)=>{
        if(res){
          this.loading=false
          this.dowload=true
        }
        else{
          this.loading=false
          console.error("algo salio mal")
        }
      })
      console.log("ya pase por aca",data)


  }


  dowloadData(){
    this.ninasService.dowloadData().subscribe((res)=>{
      if(res){
        const data: Blob= new Blob([res],{type:EXCEL_TYPE});
        FileSaver.saveAs(data,"documento"+EXCEL_EXT);
        this.dowload=false
        const block_btn:any=document.querySelector('#update');
        this.renderer2.setStyle(block_btn,"display","initial")


      }else{
        console.error("error al descargar datos")
      }


    })
  }

  }


