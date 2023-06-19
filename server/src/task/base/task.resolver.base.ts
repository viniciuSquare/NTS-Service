/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateTaskArgs } from "./CreateTaskArgs";
import { UpdateTaskArgs } from "./UpdateTaskArgs";
import { DeleteTaskArgs } from "./DeleteTaskArgs";
import { TaskCountArgs } from "./TaskCountArgs";
import { TaskFindManyArgs } from "./TaskFindManyArgs";
import { TaskFindUniqueArgs } from "./TaskFindUniqueArgs";
import { Task } from "./Task";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { TaskService } from "../task.service";
@graphql.Resolver(() => Task)
export class TaskResolverBase {
  constructor(protected readonly service: TaskService) {}

  async _tasksMeta(
    @graphql.Args() args: TaskCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Task])
  async tasks(@graphql.Args() args: TaskFindManyArgs): Promise<Task[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Task, { nullable: true })
  async task(@graphql.Args() args: TaskFindUniqueArgs): Promise<Task | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Task)
  async createTask(@graphql.Args() args: CreateTaskArgs): Promise<Task> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Task)
  async updateTask(@graphql.Args() args: UpdateTaskArgs): Promise<Task | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Task)
  async deleteTask(@graphql.Args() args: DeleteTaskArgs): Promise<Task | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Customer], { name: "customers" })
  async resolveFieldCustomers(
    @graphql.Parent() parent: Task,
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    const results = await this.service.findCustomers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
