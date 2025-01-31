import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Product } from 'src/Entities/Product.entity';
import { CreateProductDto } from './productDTO/product.dto';
import { ProductService } from './product.service';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/User/UserDTO/Role.enum';
import { RolesGuard } from 'src/Auth/Guard/roles.guard';

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @SetMetadata('isPublic', true)
  async getProduct(@Query('page') page: number, @Query('limit') limit: number) {
    try {
      const pageNumber = page || 1;
      const limitNumber = limit || 5;
      return await this.productService.getProduct(pageNumber, limitNumber);
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Error al obtener los productos.',
        error.message || error,
      );
    }
  }

  @Post()
  @Roles(Role.admin)
  @UseGuards(RolesGuard)
  @ApiBearerAuth()
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    try {
      const product = await this.productService.createProduct(createProductDto);
      return product;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Error al crear el producto.',
        error.message || error,
      );
    }
  }

  @Get(':id')
  @SetMetadata('isPublic', true)
  async getProductById(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const product = await this.productService.getProductById(id);
      if (!product) {
        throw new NotFoundException('Producto no encontrado');
      }
      return product;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Error al obtener el producto.',
        error.message || error,
      );
    }
  }

  @Put(':id')
  @Roles(Role.admin)
  @UseGuards(RolesGuard)
  @ApiBearerAuth()
  async updateProductById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: Product,
  ) {
    try {
      const updatedProduct = await this.productService.updateProductById(
        id,
        product,
      );
      if (!updatedProduct) {
        throw new NotFoundException('Producto no encontrado');
      }
      return updatedProduct;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Error al actualizar el producto.',
        error.message || error,
      );
    }
  }

  @Delete(':id')
  @Roles(Role.admin)
  @UseGuards(RolesGuard)
  @ApiBearerAuth()
  async isRetired(@Param('id', ParseUUIDPipe) id: string) {
    return await this.productService.isRetired(id);
  }
}
