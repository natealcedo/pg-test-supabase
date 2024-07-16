// global.d.ts
import * as AllTypes from "./lib/types";

declare global {
  type Json = AllTypes.Json;
  type Database = AllTypes.Database;
  type PublicSchema = AllTypes.PublicSchema;
  type Tables<
    PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
      ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
      : never = never,
  > = AllTypes.Tables<PublicTableNameOrOptions, TableName>;
  type TablesInsert<
    PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
      ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
      : never = never,
  > = AllTypes.TablesInsert<PublicTableNameOrOptions, TableName>;
  type TablesUpdate<
    PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
      ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
      : never = never,
  > = AllTypes.TablesUpdate<PublicTableNameOrOptions, TableName>;
  type Enums<
    PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
      ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
      : never = never,
  > = AllTypes.Enums<PublicEnumNameOrOptions, EnumName>;
}
