/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { UserStatus } from "src/User/UserDTO/users.dto";



class UserInfoDTO {
  @ApiProperty({
    description: 'Identificador único del usuario.',
    example: '12345abcde',
  })
  id: string;

  @ApiProperty({
    description: 'Nombre del usuario.',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'Dirección de correo electrónico del usuario.',
    example: 'johndoe@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Número de teléfono del usuario.',
    example: '+1234567890',
  })
  phone: string;

  @ApiProperty({
    description: 'Dirección física del usuario.',
    example: '123 Main St, Springfield, IL',
    required: false,
  })
  address?: string;

  @ApiProperty({
    description: 'Estado actual del usuario dentro del sistema. Los valores posibles incluyen "active" (activo), "inactive" (inactivo), "banned" (prohibido), entre otros. Este estado determina el nivel de acceso del usuario.',
    example: 'active',
  })
  userStatus: string;
}

export class SingInDTOResponse {
    @ApiProperty({
      description: 'Información completa del usuario autenticado, incluyendo detalles como su nombre, correo electrónico y estado actual.',
      type: UserInfoDTO,
    })
    userInfo: UserInfoDTO;
  
    @ApiProperty({
      description: 'Token JWT generado durante la autenticación. Este token permite el acceso a las rutas protegidas del sistema.',
      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    })
    token: string;
  
}

export class TokenRefreshPayloadDTO {
    @ApiProperty({
      description: 'Identificador único del usuario.',
      example: '12345abcde',
    })
    sub: string;
  
    @ApiProperty({
      description: 'Dirección de correo electrónico del usuario.',
      example: 'johndoe@example.com',
    })
    email: string;
  
    @ApiProperty({
      description: 'ID del usuario.',
      example: '12345',
    })
    id: string;
  
    @ApiProperty({
      description: 'Indica si el usuario tiene privilegios de administrador.',
      example: true,
    })
    isAdmin: boolean | string[];
  
    @ApiProperty({
      description: 'Estado actual del usuario dentro del sistema.',
      example: 'active',
      enum: UserStatus
    })
    userStatus: string;

    @ApiProperty({
      description: 'Fecha y hora de expiración del token (UNIX timestamp en segundos)',
      example: Math.floor(Date.now() / 1000) + 60 * 60,
    })
    exp: number;

    @ApiProperty({
      description: 'Fecha y hora en que se emitió el token (UNIX timestamp en segundos)',
      example: Math.floor(Date.now() / 1000),
    })
    iat: number;

    @ApiProperty({
      description: 'Roles para la validación de tokens.'
    })
    roles: string[];
}

export class RefreshTokenDTO {
  
  @IsString({message: 'El token debe ser una cadena de texto.'})
  @IsNotEmpty({message: 'El token no puede estar vacio'})
  tokenAccess: string;
}