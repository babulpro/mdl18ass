import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

// 1.crud operation using user model



// insertion data (all relational data are create here)

export async function POST(req,res){
    BigInt.prototype.toJSON= function(){
        return this.toString()
    }
    try{
        const prisma = new PrismaClient()
        const result = await prisma.user.create({
            data:{
                firstName:"md",
                middleName:"babul",
                lastName:"hossain",
                mobile:"123242",
                email:"bagsdb@gmail.com",
                passwordHash:"1134",
                intro:"i am just learner",
                prfile:"profile",
                post:{
                    create:{
                        title:"this is the title",
                        metaTitle:"metaTitle",
                        slug:"slug",
                        summary:"summary",
                        published:"hello punlished",
                        content:"this is content",
                        post_comment:{
                            create:{
                                title:'title',
                                published:"punlished",
                                content:"this is the content"

                            }
                        },
                        post_meta:{
                            create:{
                                key:"this is the key",
                                content:"hello content"
                            }
                        } ,
                        post_category:{
                            create:{
                                categoryId:"this is category id"
                                
                            
                            }
                        },
                        post_tag:{
                            create:{
                                tag_Id:"tag_id"
                            }
                        }

                    }
                }

                 
            }
        })

        return NextResponse.json({status:"success",data:result})
    }
    catch(err){
        return NextResponse.json({status:"fail",data:err})

    }
}



// read data

//only by changing the name of model we can read all data

export async function GET(req,res){
    BigInt.prototype.toJSON= function(){
        return this.toString()
    }
    try{
        const prisma = new PrismaClient()
        const result = await prisma.user.findMany(
    //         {
    //    where: {email: "babul@gmail.com"},
    //    select: {id: true}
    //   }
        )

        return NextResponse.json({status:"success",data:result})
    }
    catch(err){
        return NextResponse.json({status:"fail",data:err})

    }
}





// update data
// by changing the name of model we can  update

export async function PUT(req,res){
    BigInt.prototype.toJSON= function(){
        return this.toString()
            }

    try{
        const prisma = new PrismaClient()
        const result = await prisma.user.update({
           where: {id: 2},
           data: {email: 'Jhon1@gmail.com'}
         })

        return NextResponse.json({status:"success",data:result})
    }
    catch(err){
        return NextResponse.json({status:"fail",data:err})

    }
}


// delete data
//only chane the model name to delete the data

export async function DELETE(req,res){
    BigInt.prototype.toJSON= function(){
        return this.toString()
            }

    try{
        const prisma = new PrismaClient()
        const result = await prisma.user.delete({
           where: {id: 3},
           
         })

        return NextResponse.json({status:"success",data:result})
    }
    catch(err){
        return NextResponse.json({status:"fail",data:err})

    }
}

