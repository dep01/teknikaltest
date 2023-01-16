import { sys_get } from 'rbase-helpers/api_client';

const uri="posts";

export async function getAll(){
  try {
    const response = await sys_get({auth:false,endpoint:uri});
    if(response.success){
      return response;
    }else{
      throw response;
    }
  } catch (error) {
    throw error
  }
}

  